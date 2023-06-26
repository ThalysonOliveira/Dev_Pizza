import { User } from '@domain/models';
import { UserData } from '@domain/useCases/users';

interface CreateUserRepository {
  execute: (input: UserData) => Promise<User>;
}

export { CreateUserRepository };
