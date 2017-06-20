// Internal Dependencies
import { AuthenticatedRequest } from '../models';

export interface Venue {
  name: string;
  isVisible: boolean;
}

export interface SearchRequestParams {
  filters: {
    neighborhoods?: string[];
    price?: {
      gte: number;
      lte: number;
    };
    numGuests?: number;
  };

  pageNum: number;

  adminSearch: boolean;
}

export interface SearchRequest extends AuthenticatedRequest {
  params: SearchRequestParams;
}

export interface SearchResponse {
  venues: Venue[];
}