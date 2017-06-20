// External Dependencies
import { Component, OnInit } from '@angular/core';

// Internal Dependencies
import { UserService } from 'client/core/user.service';
import { SearchService, SearchState } from 'client/core/search.service';
import { ApiService } from 'client/core/api/api.service';

// Internal Types

@Component({
  selector: 'my-app',
  templateUrl: './app.component.jade'
})

export class AppComponent implements OnInit {
  searchState: SearchState;
  venues: any[];

  constructor(
    private userService: UserService,
    private searchService: SearchService,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.userService.load();

    this.searchState = this.searchService.startSearch();

    setTimeout(() => {
      this.search();
    }, 2000);
  }

  /**
   * {
   *   filters: {
   *     numGuests: number,
   *     price: { lte: number, gte: number },
   *     neighborhoods: string[]
   *   },
   *   numPage: number,
   *   adminSearch: boolean
   * }
   */
  search = () => {
    this.searchState.filters = {
      numGuests: 5,
      price: {
        lte: 50,
        gte: 7
      },
      neighborhoods: [
        `Chelsea`,
        `Bushwick`,
        `Tribeca`
      ]
    };

    this.searchState.adminSearch = false;
    this.searchState.pageNum = 2;

    this.apiService.search.search({ searchParams: this.searchState })
      .subscribe(
        data => {
          this.venues = data.venues
        },
        error => this.handleHttpError(error)
      )
  };

  handleHttpError = (error: Error) => {
    console.error(error);
    console.error(error.stack);
    throw error;
  }
}