import { ListAllProductsByCategoryService } from '@data/services/products';
import { ListAllProductsByCategoryPrisma } from '@infra/database/prisma/repositories/products';
import { ListAllProductsByCategoryController } from '@presentation/controllers/products';

const makeListAllProductsByCategory = () => {
  const listAllProductsByCategoryRepository =
    new ListAllProductsByCategoryPrisma();
  const listAllProductsByCategoryService = new ListAllProductsByCategoryService(
    listAllProductsByCategoryRepository
  );
  return new ListAllProductsByCategoryController(
    listAllProductsByCategoryService
  );
};

export { makeListAllProductsByCategory };
