// External Dependencies
import { Request } from 'express';

// Internal Dependencies

// Internal Types

export interface User {
  id: string;

  name: {
    first: string;
    last: string;
  };

  email: string;
  
  roles: string[];
}

export interface AuthenticatedRequest extends Request {
  user: User;
}