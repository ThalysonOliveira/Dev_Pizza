import { VerifyTokenAdapter } from '@infra/protocols/token';
import { Context, Requester } from '@type/middlewares';

class ContextController {
  context({ req }: Requester): Partial<Context> | null {
    const { headers } = req;
    const { authorization } = headers;

    try {
      if (!authorization) return {};

      const [, token] = authorization.split(' ');
      const verifyTokenAdapter = new VerifyTokenAdapter();
      const { id: userId } = verifyTokenAdapter.execute(token);

      return { userId };
    } catch (error) {
      return {};
    }
  }
}

export { ContextController };
