import { Order } from '@domain/models';
import { CreateOrder, OrderData } from '@domain/useCases/order';
import { getErrorResponse } from '@presentation/errors';

class CreateOrderController {
  constructor(private createOrder: CreateOrder) {}

  handle(input: OrderData): Promise<Partial<Order>> {
    try {
      return this.createOrder.execute(input);
    } catch (error) {
      return getErrorResponse(error);
    }
  }
}

export { CreateOrderController };
