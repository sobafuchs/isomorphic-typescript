// External Dependencies
import { Component, OnInit } from '@angular/core';

// Internal Dependencies
import { ApiService } from 'client/core/api/api.service';

// Internal Types

@Component({
  selector: 'my-app',
  templateUrl: './app.component.jade'
})

export class AppComponent implements OnInit {
  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.apiService.users.getMe();
  }
}