import { CreateUserRepository } from '@data/repositories/users';
import { User } from '@domain/models';
import { UserData } from '@domain/useCases/users';
import prismaClient from '../..';

class CreateUserPrisma implements CreateUserRepository {
  execute(input: UserData): Promise<User> {
    return prismaClient.user.create({
      data: input,
    }) as Promise<User>;
  }
}

export { CreateUserPrisma };
