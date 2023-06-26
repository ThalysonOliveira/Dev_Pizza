import { Authentication } from '@domain/useCases/authentication';
import { getErrorResponse } from '@presentation/errors';

class AuthenticateController {
  constructor(private authentication: Authentication) {}

  async handle(email: string, password: string): Promise<string> {
    try {
      const authenticateResult = await this.authentication.execute(
        email,
        password
      );
      return authenticateResult;
    } catch (error) {
      return getErrorResponse(error);
    }
  }
}

export { AuthenticateController };
