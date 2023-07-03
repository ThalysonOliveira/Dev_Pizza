import { CreateItemRepository } from '@data/repositories/items';
import { Item } from '@domain/models';
import { AddItemToOrder, ItemData } from '@domain/useCases/order';

class AddItemToOrderService implements AddItemToOrder {
  constructor(private createItemRepository: CreateItemRepository) {}

  async execute(input: ItemData): Promise<Partial<Item>> {
    const { id, order_id, product_id, amount } =
      await this.createItemRepository.execute(input);

    return {
      id,
      order_id,
      product_id,
      amount,
    };
  }
}

export { AddItemToOrderService };
