export interface User {
  id: string;
  alias: string | null;
  enc_public_key: string;
  verify_key: string;
  created_at: string;
  updated_at: string;
}

export type UserNew = Pick<User, 'alias' | 'enc_public_key' | 'verify_key'>;
export type UserToCreate = Omit<User, 'created_at' | 'updated_at'>;

export interface Post {
  id: string;
  user_id: string;
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
}

export type PostNew = Pick<Post, 'title' | 'body' | 'user_id'>;
export type PostToCreate = Omit<Post, 'created_at' | 'updated_at'>;

export interface Tag {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export type TagNew = Pick<Tag, 'name'>;
export type TagToCreate = Omit<Tag, 'created_at' | 'updated_at'>;

export interface PostTag {
  id: string;
  post_id: string;
  tag_id: string;
}

export type PostResponse = Post & { tags?: string[] };
