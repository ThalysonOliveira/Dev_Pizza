import { FindAllItemsByOrderIdRepository } from '@data/repositories/items';
import { Item } from '@domain/models';
import prismaClient from '../..';

class FindAllItemsByOrderIdPrisma implements FindAllItemsByOrderIdRepository {
  execute(orderId: string): Promise<Item[]> {
    return prismaClient.item.findMany({
      where: {
        order_id: orderId,
      },
      include: {
        prodcut: true,
        order: true,
      },
    }) as Promise<Item[]>;
  }
}

export { FindAllItemsByOrderIdPrisma };
