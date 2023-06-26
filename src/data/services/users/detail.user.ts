import { User } from '../../../domain/models/user';
import { DetailUser } from '../../../domain/useCases/users';
import { FindUserByIdRepository } from '../../repositories/users/find-user-by-id';

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
