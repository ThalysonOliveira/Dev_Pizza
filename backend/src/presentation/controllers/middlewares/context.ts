import { VerifyTokenAdapter } from '@infra/protocols/token';
import { getErrorResponse, notAuthorized } from '@presentation/errors';
import { Requester } from '@type/middlewares';

class ContextController {
  context({ req }: Requester) {
    const { headers } = req;
    const { authorization } = headers;

    try {
      if (
        req.body.operationName === 'Authentication' ||
        req.body.operationName === 'CreateUser'
      )
        return {};

      if (!authorization) return notAuthorized();

      const [, token] = authorization.split(' ');
      const verifyTokenAdapter = new VerifyTokenAdapter();
      const { id: userId } = verifyTokenAdapter.execute(token);

      return { userId };
    } catch (error) {
      return getErrorResponse(error);
    }
  }
}

export { ContextController };
