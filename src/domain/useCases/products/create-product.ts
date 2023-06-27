import { Product } from '@domain/models/product';

type ProductData = {
  name: string;
  price: string;
  description: string;
  categoryId: string;
};

interface CreateProduct {
  execute: (input: ProductData) => Promise<Product>;
}

export { CreateProduct, ProductData };
