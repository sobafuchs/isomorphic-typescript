// External Dependencies

// Internal Dependencies

// Internal Types
import { User } from '../models';
import { SearchRequestParams, Venue } from './models';

export const findFromQuery = async ({ query, user }: { query: SearchRequestParams, user: User }) => {
  let {
    filters: {
      price: { gte, lte },
    neighborhoods,
    numGuests
    },
    adminSearch,
    pageNum
  } = query;
  const { roles } = user;

  adminSearch = adminSearch ? user.roles.indexOf('admin') > -1 : false;

  return mockDbQuery({ gte, lte, neighborhoods, numGuests, adminSearch, pageNum });
};

/**
 * Really hard to read mock db query function that (barely) mimics the complexity of
 * an actual search operation
 */
function mockDbQuery(query: { gte: number, lte: number, neighborhoods: string[], numGuests: number, adminSearch: boolean, pageNum: number }) {
  if (query.adminSearch) {
    return [
      { name: `Cheap Chelsea Venue 1`, isVisible: false },
      { name: `Expensive Tribeca Venue 1`, isVisible: true },
      { name: `Expensive Bushwick Venue 4`, isVisible: false },
    ];
  }

  if (query.neighborhoods.find(neighborhood => neighborhood === 'Bushwick')) {

    /**
     * If the user wants venues for less than $50 a person, return cheap venues, 
     * otherwise return expensive venues
     */
    return query.lte && query.lte <= 50 ?
      [
        { name: `Cheap Bushwick Venue 1`, isVisible: true },
        { name: `Cheap Bushwick Venue 2`, isVisible: true },
        { name: `Cheap Bushwick Venue 3`, isVisible: true }
      ] :
      [
        { name: `Expensive Bushwick Venue 1`, isVisible: true },
        { name: `Expensive Bushwick Venue 2`, isVisible: true },
        { name: `Expensive Bushwick Venue 3`, isVisible: true }
      ];
  }

  return query.pageNum === 0 ?
    [
      { name: `Cheap Chelsea Venue 2`, isVisible: true },
      { name: `Expensive Chelsea Venue 1`, isVisible: true },
      { name: `Cheap Bushwick Venue 1`, isVisible: true },
      { name: `Cheap Bushwick Venue 2`, isVisible: true }
    ] :
    [
      { name: `Cheap Chelsea Venue 14`, isVisible: true },
      { name: `Cheap Bushwick Venue 36`, isVisible: true },
      { name: `Expensive Tribeca Venue 2`, isVisible: true }
    ];
};