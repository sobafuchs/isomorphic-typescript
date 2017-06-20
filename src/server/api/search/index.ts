// External Dependencies
import { Router } from 'express';

// Internal Dependencies
import { mockLoggedInUser } from '../helpers';
import { search } from './routes';

export function searchRouter(): Router {
  const router = Router();

  router.use((req: any, res, next) => {
    req.user = mockLoggedInUser();
    next();
  });

  router.route(`/`)
    .get(search);
  
  return router;
}