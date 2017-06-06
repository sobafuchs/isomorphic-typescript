// External Dependencies
import { Router } from 'express';
import { json, urlencoded } from 'body-parser';

// Internal Dependencies

// Internal Types

export const api = (): Router => {
  const router = Router();
  router.use(json());

  router.use(urlencoded({ extended: true }));
  
  return router;
}