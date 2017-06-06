// External Dependencies

// Internal Dependencies
import { fetchUser } from './helpers';

// Internal Types

export const getMe = async (req, res) => {
  try {
    const user = await fetchUser({ id: req.user.id });

    return res.json({ user });
  } catch (error) {
    return res.status(500).json({
      error,
      stack: error.stack,
      endpoint: `auth.getMe`
    });
  }
}

