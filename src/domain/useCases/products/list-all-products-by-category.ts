import { Product } from '@domain/models';

interface ListAllProductsByCategory {
  execute: (categoryId: string) => Promise<Partial<Product>[]>;
}

export { ListAllProductsByCategory };
