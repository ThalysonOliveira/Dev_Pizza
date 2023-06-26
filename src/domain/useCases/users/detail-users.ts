import { User } from '@domain/models';

interface DetailUser {
  execute: (id: string) => Promise<Partial<User>>;
}

export { DetailUser };
