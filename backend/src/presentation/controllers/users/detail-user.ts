import { User } from '@domain/models';
import { DetailUser } from '@domain/useCases/users';
import {
  getErrorResponse,
  invalidUserOrNotAuthorized,
} from '@presentation/errors';

class DetailUserController {
  constructor(private detailUser: DetailUser) {}

  async handle(id: string): Promise<string | Partial<User>> {
    try {
      const userResult = await this.detailUser.execute(id);
      if (!userResult) return invalidUserOrNotAuthorized();

      return userResult;
    } catch (error) {
      return getErrorResponse(error);
    }
  }
}

export { DetailUserController };
