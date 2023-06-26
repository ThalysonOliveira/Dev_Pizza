/* eslint-disable no-unused-vars */
import { User } from '../../../domain/models/user';

interface FindUserByIdRepository {
  execute: (id: string) => Promise<User>;
}

export { FindUserByIdRepository };
