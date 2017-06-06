// External Dependencies
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as qs from 'qs';

// Internal Dependencies

// Internal Types

@Injectable()
export class HttpService {
  constructor(
    private httpService: Http
  ) {}

  public get = (url, params?: any): Observable<any> => {
    const urlQuery = params ? `${url}?${qs.stringify(params)}` : url;

    return this.httpService
      .get(urlQuery, Object.assign({}, params, { headers: this.defineHeaders() }))
      .map(response => extractData(response));
  }

  public post = (url: string, params?: any): Observable<any> => {
    return this.httpService
      .post(url, params, { headers: this.defineHeaders() })
      .map(response => extractData(response));
  };

  private defineHeaders = () => {
    const headers = new Headers();
    headers.append('Authorization', 'lol_im_authorized');
    return headers;
  };
}

function extractData(response: Response) {
  return response.json();
}