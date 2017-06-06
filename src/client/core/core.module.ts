// External Dependencies
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Internal Dependencies
import { UserService } from './user.service';
import { HttpService } from './http.service';
import { ApiService } from './api/api.service';

// Internal Types

@NgModule({
  imports: [HttpModule],
  providers: [UserService, HttpService, ApiService]
})

export class CoreModule {}