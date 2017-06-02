// External dependencies
import * as express from 'express';

// Internal Dependencies
import { api } from './api';

// Internal Types

export const app = () => {
  const app = express();

  app.use(`/api/v1`, api(di));
  
  return app;
};