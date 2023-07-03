import { Item } from '@domain/models';
import { AddItemToOrder, ItemData } from '@domain/useCases/order';

class AddItemToOrderController {
  constructor(private addItemToOrder: AddItemToOrder) {}

  handle(input: ItemData): Promise<Partial<Item>> {
    return this.addItemToOrder.execute(input);
  }
}

export { AddItemToOrderController };
