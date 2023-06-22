/* eslint-disable no-unused-vars */
import { User } from '../../../domain/models/user';

interface FindUserByEmailRepository {
  execute: (email: string) => Promise<User>;
}

export { FindUserByEmailRepository };
