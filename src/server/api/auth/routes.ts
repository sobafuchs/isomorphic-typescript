// External Dependencies
import { Response } from 'express';

// Internal Dependencies
import { fetchUser } from './helpers';

// Internal Types
import { GetMeRequest, GetMeResponse} from './models';

export const getMe = async (req: GetMeRequest, res: Response) => {
  try {
    const user = await fetchUser({ id: req.user.id });

    const data: GetMeResponse = { user };
    return res.json(data);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

