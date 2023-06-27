import prismaClient from '../..';
import { FindProductByNameRepository } from '@data/repositories/products';
import { Product } from '@domain/models';

class FindProductByNamePrisma implements FindProductByNameRepository {
  execute(name: string): Promise<Product> {
    return prismaClient.product.findFirst({
      where: {
        name,
      },
    }) as Promise<Product>;
  }
}

export { FindProductByNamePrisma };
