import { DetailOrder } from '@domain/useCases/order';

class DetailOrderController {
  constructor(private detailOrder: DetailOrder) {}

  handle(orderId: string) {
    return this.detailOrder.execute(orderId);
  }
}

export { DetailOrderController };
