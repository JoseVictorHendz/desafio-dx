import { Router } from 'express';

import CreateUserService from '../services/users/CreateUserService';

const userRouter = Router();

userRouter.post('/', async (request, Response) => {
  const { name, email, password } = request.body;

  const createUserService = new CreateUserService();

  const newUSer = await createUserService.execute({
    name,
    email,
    password,
  });

  newUSer.password = '';

  Response.json(newUSer);
});

export default userRouter;
