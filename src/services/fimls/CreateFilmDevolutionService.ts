import { getRepository, getCustomRepository } from 'typeorm';
import AppError from '../../errors/AppError';

import Rental from '../../models/Rental';

import FilmsRepository from '../../repositories/FilmsRepository';

interface Request {
  user_id: string;
  film_id: string;
}

class CreateFilmDevolutionService {
  public async execute({ user_id, film_id }: Request): Promise<Rental> {
    const rentalRepository = getRepository(Rental);
    const filmRepository = getCustomRepository(FilmsRepository);

    const filmRent = await rentalRepository.findOne({
      where: { film_id, user_id, rental: true },
    });

    if (!filmRent) {
      throw new AppError('Film not rent by user');
    }

    const film = await filmRepository.findOne(film_id);

    const totalAvaliblefilm = (film?.available_quantity || 0) + 1;

    await filmRepository.save({
      id: film?.id,
      available_quantity: totalAvaliblefilm,
    });

    const updateRent = await rentalRepository.save({
      id: filmRent.id,
      rental: false,
    });

    return updateRent;
  }
}

export default CreateFilmDevolutionService;
