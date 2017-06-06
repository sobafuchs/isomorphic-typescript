// External dependencies
import * as express from 'express';
import * as morgan from 'morgan';

// Internal Dependencies
import { api } from './api';

// Internal Types

export const app = () => {
  const app = express();
  app.use(morgan('combined'));
  
  app.use(`/api/v1`, api());
  
  return app;
};