import { TokenAdapter } from '@infra/protocols/token';
import { notAuthorized } from '@presentation/errors';
import { Requester } from '@type/middlewares';

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
