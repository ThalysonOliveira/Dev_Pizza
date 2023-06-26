import { CreateUserService } from '@data/services/users';
import {
  CreateUserPrisma,
  FindUserByEmailPrisma,
} from '@infra/database/prisma/repositories/users';
import { EncryptAdapter } from '@infra/protocols/encrypter';
import { CreateUserController } from '@presentation/controllers/users';

const makeCreateUser = () => {
  const encrypt = new EncryptAdapter(8);
  const createUserRepository = new CreateUserPrisma();
  const findUserbyEmail = new FindUserByEmailPrisma();
  const createUserService = new CreateUserService(
    findUserbyEmail,
    createUserRepository,
    encrypt
  );
  return new CreateUserController(createUserService);
};

export { makeCreateUser };
