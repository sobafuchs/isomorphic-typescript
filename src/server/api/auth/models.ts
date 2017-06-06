// External Dependencies

// Internal Dependencies
import { AuthenticatedRequest, User as GeneralUser } from '../models';

// Internal Types

export type AuthUser = GeneralUser;

export interface GetMeRequest extends AuthenticatedRequest {

}

export interface GetMeResponse {
  user: AuthUser;
}
