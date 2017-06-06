// External Dependencies

// Internal Dependencies

// Internal Types
import { User } from './models';

export const mockLoggedInUser = (): User => ({
  id: 'id123',
  name: {
    first: 'Test',
    last: 'User'
  },
  email: 'test@email.com',
  roles: ['admin']
});