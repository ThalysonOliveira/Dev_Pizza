import { FindUserByIdRepository } from '@data/repositories/users';
import { User } from '@domain/models';
import prismaClient from '../..';

class FindUserByIdPrisma implements FindUserByIdRepository {
  execute(id: string): Promise<User> {
    return prismaClient.user.findFirst({
      where: {
        id,
      },
    }) as Promise<User>;
  }
}

export { FindUserByIdPrisma };
