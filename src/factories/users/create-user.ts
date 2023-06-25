import { CreateUserController } from '../../presentation/controllers/users';
import { CreateUserService } from '../../data/services/users';
import { CreateUserPrisma } from '../../infra/database/prisma/repositories/users/create-user-prisma';
import { FindUserByEmailPrisma } from '../../infra/database/prisma/repositories/users/find-user-by-email-prisma';
import { EncrypterAdapter } from '../../infra/protocols/encrypter/encrypter-adapter';

const makeCreateUser = () => {
  const encrypter = new EncrypterAdapter(8);
  const createUserRepository = new CreateUserPrisma();
  const findUserbyEmail = new FindUserByEmailPrisma();
  const createUserService = new CreateUserService(
    findUserbyEmail,
    createUserRepository,
    encrypter
  );
  return new CreateUserController(createUserService);
};

export { makeCreateUser };
