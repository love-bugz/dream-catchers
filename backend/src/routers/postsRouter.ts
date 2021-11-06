import express from 'express';
import Posts from '../controllers/postsController';
import { Post, PostToCreate } from '../types';
import { v4 as uuid } from 'uuid';
import { ensurePostSchema } from '../middleware/postsMiddleware';

const router = express.Router();

router.post('/new', ensurePostSchema, async (_req, res, next) => {
  try {
    const post = res.locals.newPost;
    const postToCreate: PostToCreate = {
      title: post.title,
      user_id: post.user_id,
      body: post.body,
      id: uuid(),
    };
    const newPost: Post = await Posts.create(postToCreate);
    res.status(201).json(newPost);
  } catch (err) {
    next(err);
  }
});

router.get('/', async (_req, res, next) => {
  try {
    const posts = await Posts.findAll();
    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
});

export default router;
