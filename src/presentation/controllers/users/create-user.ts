/* eslint-disable no-unused-vars */

import {
  CreateUser,
  UserData,
} from '../../../domain/useCases/users/create-user';
import { getErrorResponse } from '../../errors';

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
