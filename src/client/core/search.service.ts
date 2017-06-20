// External Dependencies
import { Injectable } from '@angular/core';

// Internal Dependencies

export class SearchState {
  filters: {
    numGuests?: number;

    price?: {
      lte: number;
      gte: number;
    };

    neighborhoods?: string[];
  } = {};

  pageNum: number = 0;

  adminSearch: boolean = false;

  constructor() {
  }

}

@Injectable()

export class SearchService {
  public startSearch = () => new SearchState();
}

