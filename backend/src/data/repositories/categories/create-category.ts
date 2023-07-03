import { Category } from '@domain/models/category';
import { CategoryData } from '@domain/useCases/categories/create-category';

interface CreateCategoryRepository {
  execute: (input: CategoryData) => Promise<Category>;
}

export { CreateCategoryRepository };
