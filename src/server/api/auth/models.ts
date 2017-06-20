// External Dependencies
import { Request } from 'express';

export interface User {
  id: string;

  name: {
    first: string;
    last: string;
  };

  email: string;
  
  roles: string[];
}

export interface GetMeRequest extends Request {
  user: User;
}

export interface GetMeResponse {
  user: User;
}
