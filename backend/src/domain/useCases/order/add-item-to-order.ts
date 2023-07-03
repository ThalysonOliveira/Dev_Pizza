import { Item } from '@domain/models/item';

type ItemData = {
  orderId: string;
  productId: string;
  amount: number;
};

interface AddItemToOrder {
  execute: (input: ItemData) => Promise<Partial<Item>>;
}

export { AddItemToOrder, ItemData };
