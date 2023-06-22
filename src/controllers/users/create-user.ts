/* eslint-disable no-unused-vars */
import { CreateUser, UserData } from '../../domain/useCases/users/create-user';

class CreateUserController {
  constructor(private createUser: CreateUser) {}

  async handle(input: UserData): Promise<string> {
    try {
      await this.createUser.execute(input);
    } catch (error) {
      if (error instanceof Error) {
        return error.message;
      }
      return error as string;
    }

    return 'User created with success!';
  }
}

export { CreateUserController };
