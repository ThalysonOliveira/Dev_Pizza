import { TokenAdapter } from '../../../infra/protocols/token/token-adapter';
import { Requester } from '../../../types/middlewares';
import { getErrorResponse } from '../../errors';

class ContextController {
  context({ req }: Requester) {
    const { headers } = req;
    const { authorization } = headers;

    try {
      if (!authorization) throw new Error('Not authorized.');

      const [, token] = authorization.split(' ');
      const tokenAdapter = new TokenAdapter();
      const { id: userId } = tokenAdapter.verifyToken(token);

      return { userId };
    } catch (error) {
      return getErrorResponse(error);
    }
  }
}

export { ContextController };
