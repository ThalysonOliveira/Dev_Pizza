import { User } from '@domain/models';
import { DetailUser } from '@domain/useCases/users';
import { invalidUserOrNotAuthorized } from '@presentation/errors';

class DetailUserController {
  constructor(private detailUser: DetailUser) {}

  async handle(id: string): Promise<string | Partial<User>> {
    if (!id) return invalidUserOrNotAuthorized();

    const userResult = await this.detailUser.execute(id);
    if (!userResult) return invalidUserOrNotAuthorized();

    return userResult;
  }
}

export { DetailUserController };
