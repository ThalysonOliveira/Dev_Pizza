import { RemoveOrder } from '@domain/useCases/order';
import { getErrorResponse } from '@presentation/errors';

class RemoveOrderController {
  constructor(private removeOrder: RemoveOrder) {}
  async handle(orderId: string): Promise<string> {
    try {
      await this.removeOrder.execute(orderId);

      return 'Order removed with success.';
    } catch (error) {
      return getErrorResponse(error);
    }
  }
}

export { RemoveOrderController };
