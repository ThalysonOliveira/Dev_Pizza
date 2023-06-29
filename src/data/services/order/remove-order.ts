import { RemoveOrderRepository } from '@data/repositories/order';
import { RemoveOrder } from '@domain/useCases/order';

class RemoveOrderService implements RemoveOrder {
  constructor(private removeOrderRepository: RemoveOrderRepository) {}

  async execute(orderId: string): Promise<void> {
    await this.removeOrderRepository.execute(orderId);
  }
}

export { RemoveOrderService };
