import prismaClient from '../..';
import { FindUserByIdRepository } from '../../../../../data/repositories/users/find-user-by-id';
import { User } from '../../../../../domain/models/user';

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
