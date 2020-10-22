import { Router } from 'express';

import userRouter from './user.routes';
import sessionsRouter from './sessions.routes';
import filRouter from './film.routes';

const routes = Router();

routes.use('/user', userRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/film', filRouter);

export default routes;
