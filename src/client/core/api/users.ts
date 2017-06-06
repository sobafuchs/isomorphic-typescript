// External Dependencies

// Internal Dependencies
import { HttpService } from 'client/core/http.service';

// Internal Types

export class UsersApi {
  constructor(
    private API_ROOT: string,
    private http: HttpService) { }

  getMe = () => {
    
  }
}