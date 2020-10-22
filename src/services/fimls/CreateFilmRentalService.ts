import { getRepository, getCustomRepository } from 'typeorm';
import AppError from '../../errors/AppError';

import FilmsRepository from '../../repositories/FilmsRepository';
import Rental from '../../models/Rental';

interface Request {
  user_id: string;
  film_id: string;
}

class CreateFilmRentalService {
  public async execute({ user_id, film_id }: Request): Promise<Rental> {
    const filmRepository = getCustomRepository(FilmsRepository);
    const rentalRepository = getRepository(Rental);

    const filmAvaliable = await filmRepository.findOne(film_id);

    if (filmAvaliable?.available_quantity === 0) {
      throw new AppError('Film not available for rental');
    }
    const totalAvaliblefilm = (filmAvaliable?.available_quantity || 1) - 1;

    await filmRepository.save({
      id: filmAvaliable?.id,
      available_quantity: totalAvaliblefilm,
    });

    const newRental = rentalRepository.create({
      user_id,
      film_id,
      rental: true,
    });

    await rentalRepository.save(newRental);

    return newRental;
  }
}

export default CreateFilmRentalService;
