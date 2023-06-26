import { FindUserByIdRepository } from '@data/repositories/users';
import { User } from '@domain/models';
import { DetailUser } from '@domain/useCases/users';

class DetailUserService implements DetailUser {
  constructor(private findUserById: FindUserByIdRepository) {}
  async execute(id: string): Promise<Partial<User>> {
    const userResult = await this.findUserById.execute(id);

    return {
      id: userResult.id,
      name: userResult.name,
      email: userResult.email,
    };
  }
}

export { DetailUserService };
