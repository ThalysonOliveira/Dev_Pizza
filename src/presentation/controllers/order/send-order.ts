import { SendOrder } from '@domain/useCases/order';
import { getErrorResponse } from '@presentation/errors';

class SendOrderController {
  constructor(private sendOrder: SendOrder) {}

  async handle(orderId: string): Promise<string> {
    try {
      await this.sendOrder.execute(orderId);

      return 'Order sent successfully.';
    } catch (error) {
      return getErrorResponse(error);
    }
  }
}

export { SendOrderController };
