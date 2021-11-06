import BaseController from './baseController';
import { Post, PostToCreate } from '../types';

class PostsController extends BaseController {
  constructor() {
    super('posts');
  }

  async create(post: PostToCreate): Promise<Post> {
    const newPost: Post[] = await this.db(this.table).insert(post).returning('*');
    return newPost[0];
  }
}

export default new PostsController();
