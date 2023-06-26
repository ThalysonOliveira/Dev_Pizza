import { CreateUserService } from '@data/services/users';
import {
  CreateUserPrisma,
  FindUserByEmailPrisma,
} from '@infra/database/prisma/repositories/users';
import { EncrypterAdapter } from '@infra/protocols/encrypter';
import { CreateUserController } from '@presentation/controllers/users';

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
