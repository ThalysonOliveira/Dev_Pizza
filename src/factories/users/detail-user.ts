import { DetailUserService } from '../../data/services/users';
import { FindUserByIdPrisma } from '../../infra/database/prisma/repositories/users/find-user-by-id';
import { DetailUserController } from '../../presentation/controllers/users/detail-user';

const makeDetailUser = () => {
  const findUserById = new FindUserByIdPrisma();
  const detailUserService = new DetailUserService(findUserById);
  return new DetailUserController(detailUserService);
};

export { makeDetailUser };
