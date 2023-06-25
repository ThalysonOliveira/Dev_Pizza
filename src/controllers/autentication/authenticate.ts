/* eslint-disable no-unused-vars */
import { Authentication } from '../../domain/useCases/authentication/authenticate';

class AuthenticateController {
  constructor(private authentication: Authentication) {}

  async handle(email: string, password: string): Promise<string> {
    return this.authentication.execute(email, password);
  }
}

export { AuthenticateController };
