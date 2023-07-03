import { FindAllItemsByOrderIdRepository } from '@data/repositories/items';
import { RelatedItem } from '@domain/models';
import prismaClient from '../..';

class FindAllItemsByOrderIdPrisma implements FindAllItemsByOrderIdRepository {
  execute(orderId: string): Promise<RelatedItem[]> {
    return prismaClient.item.findMany({
      where: {
        order_id: orderId,
      },
      include: {
        product: true,
        order: true,
      },
    }) as Promise<RelatedItem[]>;
  }
}

export { FindAllItemsByOrderIdPrisma };
