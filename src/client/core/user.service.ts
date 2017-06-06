// External Dependencies
import { Injectable } from '@angular/core';

// Internal Dependencies
import { ApiService } from 'client/core/api/api.service';

// Internal Types
import { User } from 'server/api/models';

@Injectable()

export class UserService {
  user: User;
  isAdmin: boolean;

  constructor(
    private apiService: ApiService
  ) {}

  public load = () => {
    this.apiService.auth.getMe()
      .subscribe(
        data => {
          this.user = data.user;
          this.isAdmin = !!this.user.roles.find(role => role === 'admin');
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