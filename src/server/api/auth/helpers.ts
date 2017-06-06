// External Dependencies

// Internal Dependencies
import { mockLoggedInUser } from '../helpers';

// Internal Types

/**
 * This is essentially a stub to represent a database call
 * to fetch the currently logged in user from the database
 */
export const fetchUser = async ({ id }: { id: string }): Promise<any> => {
  return mockLoggedInUser();
};