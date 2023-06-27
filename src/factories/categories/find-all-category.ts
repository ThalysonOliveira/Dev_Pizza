import { FindAllCategoryService } from '@data/services/categories';
import { FindAllCategoryPrisma } from '@infra/database/prisma/repositories/categories';
import { FindAllCategoryController } from '@presentation/controllers/categories';

const makeFindAllCategory = () => {
  const findAllCategoryRepository = new FindAllCategoryPrisma();
  const findAllCategoryService = new FindAllCategoryService(
    findAllCategoryRepository
  );
  return new FindAllCategoryController(findAllCategoryService);
};

export { makeFindAllCategory };
