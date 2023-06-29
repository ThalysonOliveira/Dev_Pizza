import { CreateItemRepository } from '@data/repositories/items';
import { Item } from '@domain/models';
import { ItemData } from '@domain/useCases/order';
import prismaClient from '../..';

class CreateItemPrisma implements CreateItemRepository {
  execute(input: ItemData): Promise<Item> {
    return prismaClient.item.create({
      data: input as any,
    }) as Promise<Item>;
  }
}

export { CreateItemPrisma };
