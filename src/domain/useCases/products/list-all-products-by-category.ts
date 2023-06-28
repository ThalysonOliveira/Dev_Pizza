import { Product } from '@domain/models';

interface ListAllProductsByCategory {
  execute: (categoryId: string) => Promise<Product[]>;
}

export { ListAllProductsByCategory };
