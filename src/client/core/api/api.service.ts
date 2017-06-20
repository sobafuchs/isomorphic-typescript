// External Dependencies
import { Injectable } from '@angular/core';

// Internal Dependencies
import { HttpService } from 'client/core/http.service';
import { AuthApi } from './auth';
import { SearchApi } from './search';

// Internal Types


@Injectable()

export class ApiService {
  private API_ROOT = '/api/v1';

  constructor(
    private http: HttpService
  ) {}

  public auth = new AuthApi(this.API_ROOT, this.http);
  public search = new SearchApi(this.API_ROOT, this.http);
}