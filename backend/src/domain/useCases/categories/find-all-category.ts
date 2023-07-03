import { Category } from '@domain/models/category';

interface FindAllCategory {
  execute: () => Promise<Partial<Category>[]>;
}

export { FindAllCategory };
