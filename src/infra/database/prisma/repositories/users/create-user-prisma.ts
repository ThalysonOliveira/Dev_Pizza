import prismaClient from '../..';
import { CreateUserRepository } from '../../../../../data/repositories/users/create-user';
import { User } from '../../../../../domain/models/user';
import { UserData } from '../../../../../domain/useCases/users/create-user';

class CreateUserPrisma implements CreateUserRepository {
  execute(input: UserData): Promise<User> {
    return prismaClient.user.create({
      data: input,
    }) as Promise<User>;
  }
}

export { CreateUserPrisma };
