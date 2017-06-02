// External Dependencies
import * as express from 'express';
import { app } from './app';

// Internal Dependencies

// Internal Types

// Constants
const PORT = 3000;

function start() {
  try {
    const server = app();
    
    server.listen(PORT);

    console.log(`Server is listening on port ${PORT}`);
  } catch (error) {
    console.error(`Error starting server: ${ error }\n${ error.stack }`);
  }
}

start();