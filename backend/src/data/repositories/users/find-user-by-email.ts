import { User } from '@domain/models';

interface FindUserByEmailRepository {
  execute: (email: string) => Promise<User>;
}

export { FindUserByEmailRepository };
