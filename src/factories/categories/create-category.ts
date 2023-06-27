import { CreateCategoryService } from '@data/services/categories';
import {
  CreateCategoryPrisma,
  FindCategoryByNamePrisma,
} from '@infra/database/prisma/repositories/categories';
import { CreateCategoryController } from '@presentation/controllers/categories';

const makeCreateCategory = () => {
  const createCategory = new CreateCategoryPrisma();
  const findCategoryByName = new FindCategoryByNamePrisma();
  const createCategoryService = new CreateCategoryService(
    createCategory,
    findCategoryByName
  );
  return new CreateCategoryController(createCategoryService);
};

export { makeCreateCategory };
