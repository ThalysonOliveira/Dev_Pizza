/* eslint-disable no-unused-vars */
import { User } from '../../models/user';

interface DetailUser {
  execute: (id: string) => Promise<Partial<User>>;
}

export { DetailUser };
