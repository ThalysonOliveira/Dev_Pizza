import { AuthenticateController } from '../../presentation/controllers/autentication';
import { AuthenticationService } from '../../data/services/authentication/authenticate';
import { FindUserByEmailPrisma } from '../../infra/database/prisma/repositories/users/find-user-by-email-prisma';
import { EncrypterAdapter } from '../../infra/protocols/encrypter/encrypter-adapter';
import { TokenAdapter } from '../../infra/protocols/token/token-adapter';

const makeAuthentication = () => {
  const encrypter = new EncrypterAdapter(8);
  const findUserbyEmail = new FindUserByEmailPrisma();
  const token = new TokenAdapter();
  const authenticationService = new AuthenticationService(
    findUserbyEmail,
    encrypter,
    token
  );
  return new AuthenticateController(authenticationService);
};
export { makeAuthentication };
