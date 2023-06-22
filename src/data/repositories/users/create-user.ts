/* eslint-disable no-unused-vars */
import { User } from '../../../domain/models/user';
import { UserData } from '../../../domain/useCases/users/create-user';

interface CreateUserRepository {
  execute: (input: UserData) => Promise<User>;
}

export { CreateUserRepository };
