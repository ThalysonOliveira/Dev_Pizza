/* eslint-disable no-unused-vars */
import { User } from '../../../domain/models/user';
import { DetailUser } from '../../../domain/useCases/users';
import { getErrorResponse } from '../../errors';

class DetailUserController {
  constructor(private detailUser: DetailUser) {}

  handle(id: string): Promise<Partial<User>> | string {
    try {
      return this.detailUser.execute(id);
    } catch (error) {
      return getErrorResponse(error);
    }
  }
}

export { DetailUserController };
