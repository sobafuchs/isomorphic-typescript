// External Dependencies
import { Router } from 'express';

// Internal Dependencies
import { getMe } from './routes';
import { mockLoggedInUser } from '../helpers';

// Internal Types

export function authRouter(): Router {
  const router = Router();

  router.use((req: any, res, next) => {
    req.user = mockLoggedInUser();
    next();
  });

  router.route(`/me`)
    .get(getMe);

  return router;
}