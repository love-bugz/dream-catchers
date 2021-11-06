import { RequestHandler } from 'express';
import { BadRequest, NotFound } from '../httpErrors';
import { PostNew } from '../types';
import Users from '../controllers/usersController';

const ensurePostSchema: RequestHandler = async (req, res, next) => {
  console.log('incoming request to create post', req.body);

  try {
    const { title, body, user_id } = req.body;

    if (Object.keys(req.body).length === 0 || !title || !body || !user_id) {
      throw new BadRequest('Request must include title, body, and user_id');
    } else if (typeof title !== 'string') {
      throw new BadRequest('title must be a string');
    } else if (typeof body !== 'string') {
      throw new BadRequest('body must be a string');
    } else if (typeof user_id !== 'string') {
      throw new BadRequest('user_id must be a string');
    }

    const foundUser = await Users.findOne({ id: user_id });
    if (!foundUser) {
      throw new NotFound(`user with id: ${user_id} not found`);
    } else {
      const post: PostNew = { title, body, user_id };
      res.locals.newPost = post;
      next();
    }
  } catch (err) {
    next(err);
  }
};

export { ensurePostSchema };
