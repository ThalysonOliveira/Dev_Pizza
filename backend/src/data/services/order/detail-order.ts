import { FindAllItemsByOrderIdRepository } from '@data/repositories/items';
import { Item } from '@domain/models';
import { DetailOrder } from '@domain/useCases/order';

class DetailOrderService implements DetailOrder {
  constructor(
    private findAllItemsByOrderIdRepository: FindAllItemsByOrderIdRepository
  ) {}
  async execute(orderId: string): Promise<Partial<Item>[]> {
    const allItemsByOderId = await this.findAllItemsByOrderIdRepository.execute(
      orderId
    );

    return allItemsByOderId.map(({ id, amount, product, order }) => ({
      id,
      amount,
      product,
      order,
    }));
  }
}

export { DetailOrderService };
