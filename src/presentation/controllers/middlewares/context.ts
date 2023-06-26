import { TokenAdapter } from '../../../infra/protocols/token/token-adapter';
import { Requester } from '../../../types/middlewares';
import { notAuthorized } from '../../errors';

class ContextController {
  context({ req }: Requester) {
    const { headers } = req;
    const { authorization } = headers;

    if (!authorization) return notAuthorized();

    const [, token] = authorization.split(' ');
    const tokenAdapter = new TokenAdapter();
    const { id: userId } = tokenAdapter.verifyToken(token);
    return { userId };
  }
}

export { ContextController };
