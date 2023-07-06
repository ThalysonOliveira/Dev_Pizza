import { Item } from '@domain/models';
import { AddItemToOrder, ItemData } from '@domain/useCases/order';
import { getErrorResponse } from '@presentation/errors';

class AddItemToOrderController {
  constructor(private addItemToOrder: AddItemToOrder) {}

  handle(input: ItemData): Promise<Partial<Item>> {
    try {
      return this.addItemToOrder.execute(input);
    } catch (error) {
      return getErrorResponse(error);
    }
  }
}

export { AddItemToOrderController };
