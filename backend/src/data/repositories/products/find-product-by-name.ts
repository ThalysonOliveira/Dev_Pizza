import { Product } from '@domain/models';

interface FindProductByNameRepository {
  execute: (name: string) => Promise<Product>;
}

export { FindProductByNameRepository };
