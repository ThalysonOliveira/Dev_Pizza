import { CreateUser, UserData } from '@domain/useCases/users';
import { getErrorResponse } from '@presentation/errors';

class CreateUserController {
  constructor(private createUser: CreateUser) {}

  async handle(input: UserData): Promise<string> {
    try {
      await this.createUser.execute(input);
      return 'User created with success!';
    } catch (error) {
      return getErrorResponse(error);
    }
  }
}

export { CreateUserController };
