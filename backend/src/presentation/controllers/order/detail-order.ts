import { DetailOrder } from '@domain/useCases/order';
import { getErrorResponse } from '@presentation/errors';

class DetailOrderController {
  constructor(private detailOrder: DetailOrder) {}

  handle(orderId: string) {
    try {
      return this.detailOrder.execute(orderId);
    } catch (error) {
      return getErrorResponse(error);
    }
  }
}

export { DetailOrderController };
