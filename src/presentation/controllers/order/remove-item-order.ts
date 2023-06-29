import { RemoveItemOrder } from '@domain/useCases/order';
import { getErrorResponse } from '@presentation/errors';

class RemoveItemOrderController {
  constructor(private removeItemOrder: RemoveItemOrder) {}
  async handle(itemId: string): Promise<string> {
    try {
      await this.removeItemOrder.execute(itemId);

      return 'Item order removed with success.';
    } catch (error) {
      return getErrorResponse(error);
    }
  }
}

export { RemoveItemOrderController };
