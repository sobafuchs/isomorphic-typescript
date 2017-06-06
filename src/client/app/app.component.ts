// External Dependencies
import { Component, OnInit } from '@angular/core';

// Internal Dependencies
import { UserService } from 'client/core/user.service';

// Internal Types

@Component({
  selector: 'my-app',
  templateUrl: './app.component.jade'
})

export class AppComponent implements OnInit {
  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.load();
  }
}