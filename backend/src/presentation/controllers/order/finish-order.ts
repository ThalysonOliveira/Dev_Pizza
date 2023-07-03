import { FinishedOrder } from '@domain/useCases/order';
import { getErrorResponse } from '@presentation/errors';

class FinishOrderController {
  constructor(private finishOrder: FinishedOrder) {}

  async handle(orderId: string): Promise<string> {
    try {
      await this.finishOrder.execute(orderId);

      return 'Order finished successfully.';
    } catch (error) {
      return getErrorResponse(error);
    }
  }
}

export { FinishOrderController };
