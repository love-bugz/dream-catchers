import { RequestHandler } from 'express';
import { BadRequest } from '../httpErrors';
import { UserNew } from '../types';

const ensureUserSchema: RequestHandler = async (req, res, next) => {
  console.log('incoming request to create user', req.body);

  try {
    const { alias, enc_public_key, verify_key } = req.body;

    if (Object.keys(req.body).length === 0 || !enc_public_key || !verify_key) {
      throw new BadRequest('Request must include enc_public_key and verify_key.');
    } else if (typeof enc_public_key !== 'string')
      throw new BadRequest('enc_public_key must be a string');
    else if (typeof verify_key !== 'string') throw new BadRequest('verify_key must be a string');
    else {
      const user: UserNew = {
        alias,
        enc_public_key,
        verify_key,
      };
      res.locals.newUser = user;
      next();
    }
  } catch (err) {
    next(err);
  }
};

export { ensureUserSchema };
