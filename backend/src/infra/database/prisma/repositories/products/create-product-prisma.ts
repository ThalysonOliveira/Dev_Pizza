import { CreateProductRepository } from '@data/repositories/products';
import { Product } from '@domain/models';
import { ProductData } from '@domain/useCases/products';
import prismaClient from '../..';

class CreateProductPrisma implements CreateProductRepository {
  execute(input: ProductData): Promise<Product> {
    return prismaClient.product.create({
      data: input as any,
    }) as Promise<Product>;
  }
}

export { CreateProductPrisma };
