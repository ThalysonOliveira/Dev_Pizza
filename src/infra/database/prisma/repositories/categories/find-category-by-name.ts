import { FindCategoryByNameRepository } from '@data/repositories/categories';
import { Category } from '@domain/models/category';
import prismaClient from '../..';

class FindCategoryByNamePrisma implements FindCategoryByNameRepository {
  execute(name: string): Promise<Category> {
    return prismaClient.category.findFirst({
      where: {
        name,
      },
    }) as Promise<Category>;
  }
}

export { FindCategoryByNamePrisma };
