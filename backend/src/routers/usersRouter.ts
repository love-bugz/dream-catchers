import express from 'express';
import Users from '../controllers/usersController';
import { User, UserToCreate } from '../types';
import { v4 as uuid } from 'uuid';
import { ensureUserSchema } from '../middleware/usersMiddleware';

const router = express.Router();

router.post('/register', ensureUserSchema, async (req, res, next) => {
  try {
    const user = res.locals.newUser;
    const userToCreate: UserToCreate = {
      alias: user.alias,
      enc_public_key: user.enc_public_key,
      verify_key: user.verify_key,
      id: uuid(),
    };
    const newUser: User = await Users.create(userToCreate);
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
});

export default router;
