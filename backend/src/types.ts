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
