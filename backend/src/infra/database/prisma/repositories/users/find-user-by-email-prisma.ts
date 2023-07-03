import { FindUserByEmailRepository } from '@data/repositories/users';
import { User } from '@domain/models';
import prismaClient from '../..';

class FindUserByEmailPrisma implements FindUserByEmailRepository {
  execute(email: string): Promise<User> {
    return prismaClient.user.findFirst({
      where: {
        email,
      },
    }) as Promise<User>;
  }
}

export { FindUserByEmailPrisma };
