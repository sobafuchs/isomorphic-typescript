// External Dependencies

// Internal Dependencies
import { fetchUser } from './helpers';

// Internal Types

export const getMe = async (req, res) => {
  try {
    const user = await fetchUser({ id: req.user.id });

    return res.json({ user });
  } catch (error) {
    res.status(500).json({ error });
  }
}

