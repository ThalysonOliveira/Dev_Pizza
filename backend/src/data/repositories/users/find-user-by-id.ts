import { User } from '@domain/models';

interface FindUserByIdRepository {
  execute: (id: string) => Promise<User>;
}

export { FindUserByIdRepository };
