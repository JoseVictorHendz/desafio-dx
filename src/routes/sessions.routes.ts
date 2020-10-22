import { Router } from 'express';

import AutheticateUserService from '../services/users/AuthenticateUserService';

const SessionsRouter = Router();

SessionsRouter.post('/logon', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUserService = new AutheticateUserService();

  const { user, token } = await authenticateUserService.execute({
    email,
    password,
  });

  user.password = '';

  return response.json({ user, token });
});

SessionsRouter.post('/logout', (request, response) => {
  response.json({ auth: false, token: null });
});

export default SessionsRouter;
