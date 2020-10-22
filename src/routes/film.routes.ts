import { getCustomRepository } from 'typeorm';

import { Router } from 'express';

import CreateFilmRentalService from '../services/fimls/CreateFilmRentalService';
import CreateFilmDevolutionService from '../services/fimls/CreateFilmDevolutionService';
import FilmRepository from '../repositories/FilmsRepository';

const userRouter = Router();

userRouter.get('/', async (request, Response) => {
  const filmRepository = getCustomRepository(FilmRepository);

  const films = await filmRepository.find();

  Response.json(films);
});

userRouter.get('/:title', async (request, Response) => {
  const { title } = request.params;
  const filmRepository = getCustomRepository(FilmRepository);

  const films = await filmRepository.findByTitle(title);

  Response.json(films);
});

userRouter.post('/rental', async (request, Response) => {
  const { user_id, film_id } = request.body;

  const createFilmRentalService = new CreateFilmRentalService();

  const newRental = await createFilmRentalService.execute({ user_id, film_id });

  Response.json(newRental);
});

userRouter.post('/devolution', async (request, Response) => {
  const { user_id, film_id } = request.body;

  const createFilmDevolutionService = new CreateFilmDevolutionService();

  const newRental = await createFilmDevolutionService.execute({
    user_id,
    film_id,
  });

  Response.json(newRental);
});

export default userRouter;
