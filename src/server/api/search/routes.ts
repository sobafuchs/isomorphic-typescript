// External Dependencies

// Internal Dependencies
import { findFromQuery } from './helpers';

// Internal Types
import { SearchRequest, SearchResponse } from './models';

export const search = async (req: SearchRequest, res) => {
  try {
    const venues = await findFromQuery({ query: req.params, user: req.user });

    const data: SearchResponse = { venues };
    res.json({ venues });
  } catch (error) {
    return res.status(500).json({ error });
  }
};