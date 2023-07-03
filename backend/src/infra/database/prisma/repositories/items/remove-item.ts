import { RemoveItemRepository } from '@data/repositories/items';
import prismaClient from '../..';

class RemoveItemPrisma implements RemoveItemRepository {
  async execute(itemId: string): Promise<void> {
    await prismaClient.item.delete({
      where: {
        id: itemId,
      },
    });
  }
}

export { RemoveItemPrisma };
