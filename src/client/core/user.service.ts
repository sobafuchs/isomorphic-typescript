// External Dependencies
import { Injectable } from '@angular/core';

// Internal Dependencies
import { ApiService } from 'client/core/api/api.service';

// Internal Types

@Injectable()

export class UserService {
  user: any;

  constructor(
    private apiService: ApiService
  ) {}

  public load = () => {
    this.apiService.auth.getMe()
      .subscribe(
        data => {
          this.user = data.user;
        },
        error => this.handleHttpError(error)
      );
  };

  private handleHttpError = (error: Error) => {
    console.error(error);
    console.error(error.stack);
    throw error;
  };
}