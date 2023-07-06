import { Order } from '@domain/models';
import { ListOrders } from '@domain/useCases/order';
import { getErrorResponse } from '@presentation/errors';

class ListOrdersController {
  constructor(private listOrders: ListOrders) {}

  handle(): Promise<Partial<Order>[]> {
    try {
      return this.listOrders.execute();
    } catch (error) {
      return getErrorResponse(error);
    }
  }
}

export { ListOrdersController };
