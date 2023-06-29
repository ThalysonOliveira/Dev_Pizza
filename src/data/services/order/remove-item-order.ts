import { RemoveItemRepository } from '@data/repositories/items';
import { RemoveItemOrder } from '@domain/useCases/order';

class RemoveItemOrderService implements RemoveItemOrder {
  constructor(private removeItemRepository: RemoveItemRepository) {}

  async execute(itemId: string): Promise<void> {
    await this.removeItemRepository.execute(itemId);
  }
}

export { RemoveItemOrderService };
