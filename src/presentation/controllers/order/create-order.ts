import { Order } from '@domain/models';
import { CreateOrder, OrderData } from '@domain/useCases/order';

class CreateOrderController {
  constructor(private createOrder: CreateOrder) {}
  handle(input: OrderData): Promise<Partial<Order>> {
    return this.createOrder.execute(input);
  }
}

export { CreateOrderController };
