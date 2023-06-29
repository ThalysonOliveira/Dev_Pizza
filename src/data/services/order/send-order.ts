import { UpdateOrderRepository } from '@data/repositories/order';
import { SendOrder } from '@domain/useCases/order';

class SendOrderService implements SendOrder {
  constructor(private updateOrderRepository: UpdateOrderRepository) {}

  async execute(orderId: string): Promise<void> {
    await this.updateOrderRepository.execute(orderId);
  }
}

export { SendOrderService };
