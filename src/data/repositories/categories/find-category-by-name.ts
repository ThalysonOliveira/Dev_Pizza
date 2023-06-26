import { Category } from '@domain/models/category';

interface FindCategoryByNameRepository {
  execute: (name: string) => Promise<Category>;
}

export { FindCategoryByNameRepository };
