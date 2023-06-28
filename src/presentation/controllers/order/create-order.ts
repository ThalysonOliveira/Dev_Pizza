import { CreateOrder, OrderData } from '@domain/useCases/order';
import { getErrorResponse } from '@presentation/errors';

class CreateOrderController {
  constructor(private createOrder: CreateOrder) {}
  async handle(input: OrderData): Promise<string> {
    try {
      await this.createOrder.execute(input);
      return 'Order created with success.';
    } catch (error) {
      return getErrorResponse(error);
    }
  }
}

export { CreateOrderController };
