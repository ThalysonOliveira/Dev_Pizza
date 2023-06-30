import { FindAllOrderNoDraftRepository } from '@data/repositories/order';
import { Order } from '@domain/models';
import { ListOrders } from '@domain/useCases/order';

class ListOrdersService implements ListOrders {
  constructor(
    private findAllOrderNoDraftRepository: FindAllOrderNoDraftRepository
  ) {}

  async execute(): Promise<Partial<Order>[]> {
    const allOrdersNoDraft = await this.findAllOrderNoDraftRepository.execute();

    return allOrdersNoDraft.map(({ id, name, table, draft, status }) => ({
      id,
      name,
      table,
      draft,
      status,
    }));
  }
}

export { ListOrdersService };
