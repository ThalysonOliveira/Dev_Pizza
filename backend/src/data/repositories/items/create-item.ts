import { Item } from '@domain/models/item';
import { ItemData } from '@domain/useCases/order/add-item-to-order';

interface CreateItemRepository {
  execute: (input: ItemData) => Promise<Item>;
}

export { CreateItemRepository };
