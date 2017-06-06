// External Dependencies
import { Observable } from 'rxjs/Observable';

// Internal Dependencies
import { HttpService } from 'client/core/http.service';

// Internal Types
import { GetMeResponse } from 'server/api/auth/models';

export class AuthApi {
  base = 'auth';

  constructor(
    private API_ROOT: string,
    private http: HttpService) { }

  getMe = (): Observable<GetMeResponse> => {
    return this.http.get(`${ this.API_ROOT }/auth/me`);
  };
}