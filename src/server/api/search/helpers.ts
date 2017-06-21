// External Dependencies

// Internal Dependencies

// Internal Types
import { User } from '../models';
import { SearchRequestParams } from './models';

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
      { name: `Cheap Chelsea Venue 1`, visible: false },
      { name: `Expensive Tribeca Venue 1`, visible: true },
      { name: `Expensive Bushwick Venue 4`, visible: false },
    ];
  }

  if (query.neighborhoods.find(neighborhood => neighborhood === 'Bushwick')) {

    /**
     * If the user wants venues for less than $50 a person, return cheap venues, 
     * otherwise return expensive venues
     */
    return query.lte && query.lte <= 50 ?
      [
        { name: `Cheap Bushwick Venue 1` },
        { name: `Cheap Bushwick Venue 2` },
        { name: `Cheap Bushwick Venue 3` }
      ].map(v => Object.assign(v, { isVisible: true })) :
      [
        { name: `Expensive Bushwick Venue 1` },
        { name: `Expensive Bushwick Venue 2` },
        { name: `Expensive Bushwick Venue 3` }
      ].map(v => Object.assign(v, { isVisible: true }));
  }

  return query.pageNum === 0 ?
    [
      { name: `Cheap Chelsea Venue 2` },
      { name: `Expensive Chelsea Venue 1` },
      { name: `Cheap Bushwick Venue 1` },
      { name: `Cheap Bushwick Venue 2` }
    ].map(v => Object.assign(v, { isVisible: true })) :
    [
      { name: `Cheap Chelsea Venue 14` },
      { name: `Cheap Bushwick Venue 36` },
      { name: `Expensive Tribeca Venue 2` }
    ].map(v => Object.assign(v, { isVisible: true }))
};