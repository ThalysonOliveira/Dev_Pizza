import { AuthenticationService } from '@data/services/authentication';
import { FindUserByEmailPrisma } from '@infra/database/prisma/repositories/users';
import { EncrypterAdapter } from '@infra/protocols/encrypter';
import { TokenAdapter } from '@infra/protocols/token';
import { AuthenticateController } from '@presentation/controllers/autentication';

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
