// External Dependencies
import { Injectable } from '@angular/core';

// Internal Dependencies
import { HttpService } from 'client/core/http.service';
import { AuthApi } from './auth';

// Internal Types


@Injectable()

export class ApiService {
  private API_ROOT = '/api/v1';

  constructor(
    private http: HttpService
  ) {}

  public auth = new AuthApi(this.API_ROOT, this.http);

}