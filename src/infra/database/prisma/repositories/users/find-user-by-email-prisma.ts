import prismaClient from '../..';
import { FindUserByEmailRepository } from '../../../../../data/repositories/users/find-user-by-email';
import { User } from '../../../../../domain/models/user';

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
