import { CreateItemRepository } from '@data/repositories/items';
import { Item } from '@domain/models';
import { ItemData } from '@domain/useCases/order';
import prismaClient from '../..';

class CreateItemPrisma implements CreateItemRepository {
  execute({ orderId, productId, amount }: ItemData): Promise<Item> {
    return prismaClient.item.create({
      data: {
        order_id: orderId,
        product_id: productId,
        amount,
      },
    }) as Promise<Item>;
  }
}

export { CreateItemPrisma };
