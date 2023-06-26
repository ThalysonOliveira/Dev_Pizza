import { AuthenticationService } from '@data/services/authentication';
import { FindUserByEmailPrisma } from '@infra/database/prisma/repositories/users';
import { CompareEncrypterAdapter } from '@infra/protocols/encrypter/compare-encrypter-adapter';
import { TokenAdapter } from '@infra/protocols/token';
import { AuthenticateController } from '@presentation/controllers/autentication';

const makeAuthentication = () => {
  const compareEncrypt = new CompareEncrypterAdapter();
  const findUserbyEmail = new FindUserByEmailPrisma();
  const token = new TokenAdapter();
  const authenticationService = new AuthenticationService(
    findUserbyEmail,
    compareEncrypt,
    token
  );
  return new AuthenticateController(authenticationService);
};
export { makeAuthentication };
