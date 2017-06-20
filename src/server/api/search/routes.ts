// External Dependencies

// Internal Dependencies
import { findFromQuery } from './helpers';

// Internal Types

export const search = async (req, res) => {
  try {
    const venues = await findFromQuery({ query: req.params, user: req.user });

    res.json({ venues });
  } catch (error) {
    return res.status(500).json({ error });
  }
};