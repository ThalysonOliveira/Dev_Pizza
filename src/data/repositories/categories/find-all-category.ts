import { Category } from '@domain/models/category';

interface FindAllCategoryRepository {
  execute: () => Promise<Category[]>;
}

export { FindAllCategoryRepository };
