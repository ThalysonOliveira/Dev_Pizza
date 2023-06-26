import { VerifyTokenAdapter } from '@infra/protocols/token';
import { notAuthorized } from '@presentation/errors';
import { Requester } from '@type/middlewares';

class ContextController {
  context({ req }: Requester) {
    const { headers } = req;
    const { authorization } = headers;

    if (!authorization) return notAuthorized();

    const [, token] = authorization.split(' ');
    const verifyTokenAdapter = new VerifyTokenAdapter();
    const { id: userId } = verifyTokenAdapter.execute(token);
    return { userId };
  }
}

export { ContextController };
