// External Dependencies
import { Router } from 'express';
import { json, urlencoded } from 'body-parser';

// Internal Dependencies
import { authRouter } from './auth';
import { searchRouter } from './search';

// Internal Types

export const api = (): Router => {
  const router = Router();
  router.use(json());

  router.use(urlencoded({ extended: true }));
  
  router.use('/auth', authRouter());
  router.use(`/search`, searchRouter());
  return router;
}