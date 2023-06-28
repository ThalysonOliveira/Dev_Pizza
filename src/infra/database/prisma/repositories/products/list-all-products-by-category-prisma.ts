import { ListAllProductsByCategoryRepository } from '@data/repositories/products';
import { Product } from '@domain/models';
import prismaClient from '../..';

class ListAllProductsByCategoryPrisma
  implements ListAllProductsByCategoryRepository
{
  execute(categoryId: string): Promise<Product[]> {
    return prismaClient.product.findMany({
      where: {
        category_id: categoryId,
      },
    }) as Promise<Product[]>;
  }
}

export { ListAllProductsByCategoryPrisma };
