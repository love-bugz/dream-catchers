import { RequestHandler } from 'express';
import { BadRequest, NotFound } from '../httpErrors';
import { PostNew } from '../types';
import Users from '../controllers/usersController';

const ensurePostSchema: RequestHandler = async (req, res, next) => {
  console.log('incoming request to create post', req.body);

  try {
    const { title, body, enc_public_key } = req.body;

    if (Object.keys(req.body).length === 0 || !title || !body || !enc_public_key) {
      throw new BadRequest('Request must include title, body, and enc_public_key');
    } else if (typeof title !== 'string') {
      throw new BadRequest('title must be a string');
    } else if (typeof body !== 'string') {
      throw new BadRequest('body must be a string');
    } else if (typeof enc_public_key !== 'string') {
      throw new BadRequest('enc_public_key must be a string');
    }

    const foundUser = await Users.findOne({ enc_public_key });
    if (!foundUser) {
      throw new NotFound(`user not found`);
    } else {
      const post: PostNew = { title, body, user_id: foundUser.id };
      res.locals.newPost = post;
      next();
    }
  } catch (err) {
    next(err);
  }
};

export { ensurePostSchema };
