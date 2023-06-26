import { CreateCategoryRepository } from '@data/repositories/categories';
import { Category } from '@domain/models/category';
import { CategoryData } from '@domain/useCases/categories/create-category';
import prismaClient from '../..';

class CreateCategoryPrisma implements CreateCategoryRepository {
  execute(input: CategoryData): Promise<Category> {
    return prismaClient.category.create({
      data: input,
    }) as Promise<Category>;
  }
}

export { CreateCategoryPrisma };
