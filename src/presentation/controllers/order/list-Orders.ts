import { Order } from '@domain/models';
import { ListOrders } from '@domain/useCases/order';

class ListOrdersController {
  constructor(private listOrders: ListOrders) {}

  handle(): Promise<Partial<Order>[]> {
    return this.listOrders.execute();
  }
}

export { ListOrdersController };
