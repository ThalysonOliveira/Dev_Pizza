import { Category } from '@domain/models/category';

interface FindAllCategory {
  execute: () => Promise<Category[]>;
}

export { FindAllCategory };
