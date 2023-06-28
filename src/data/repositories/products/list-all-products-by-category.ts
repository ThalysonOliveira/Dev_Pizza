import { Product } from '@domain/models';

interface ListAllProductsByCategoryRepository {
  execute: (categoryId: string) => Promise<Product[]>;
}

export { ListAllProductsByCategoryRepository };
