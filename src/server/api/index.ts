// External Dependencies
import { Router } from 'express';
import { json, urlencoded } from 'body-parser';

// Internal Dependencies
import { authRouter } from './auth';

// Internal Types

export const api = (): Router => {
  const router = Router();
  router.use(json());

  router.use(urlencoded({ extended: true }));
  
  router.use('/auth', authRouter());

  return router;
}