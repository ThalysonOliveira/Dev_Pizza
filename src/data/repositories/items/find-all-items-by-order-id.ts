import { Item } from '@domain/models';

interface FindAllItemsByOrderIdRepository {
  execute: (orderId: string) => Promise<Item[]>;
}

export { FindAllItemsByOrderIdRepository };
