import { Product } from '@domain/models';
import { ProductData } from '@domain/useCases/products';

interface CreateProductRepository {
  execute: (input: ProductData) => Promise<Product>;
}

export { CreateProductRepository };
