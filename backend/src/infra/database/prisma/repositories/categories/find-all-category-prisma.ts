import { FindAllCategoryRepository } from '@data/repositories/categories';
import { Category } from '@domain/models/category';
import prismaClient from '../..';

class FindAllCategoryPrisma implements FindAllCategoryRepository {
  execute(): Promise<Category[]> {
    return prismaClient.category.findMany({}) as Promise<Category[]>;
  }
}

export { FindAllCategoryPrisma };
