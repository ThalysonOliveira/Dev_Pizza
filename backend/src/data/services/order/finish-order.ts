import { UpdateOrderToStatusTrueRepository } from '@data/repositories/order';
import { FinishedOrder } from '@domain/useCases/order';

class FinishOrderService implements FinishedOrder {
  constructor(
    private updateOrderToStatusTrueRepository: UpdateOrderToStatusTrueRepository
  ) {}
  async execute(orderId: string): Promise<void> {
    await this.updateOrderToStatusTrueRepository.execute(orderId);
  }
}

export { FinishOrderService };
