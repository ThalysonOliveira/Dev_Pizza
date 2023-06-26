/* eslint-disable no-unused-vars */
import { User } from '../../../domain/models/user';
import { DetailUser } from '../../../domain/useCases/users';

class DetailUserController {
  constructor(private detailUser: DetailUser) {}

  async handle(id: string): Promise<string | Partial<User>> {
    if (!id) throw new Error('Invalid user/Not authorized.');

    const userResult = await this.detailUser.execute(id);
    if (!userResult) throw new Error('Invalid user/Not authorized.');

    return userResult;
  }
}

export { DetailUserController };
