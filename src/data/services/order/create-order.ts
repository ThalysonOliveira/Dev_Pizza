import {
  CreateOrderRepository,
  FindOrderByTableRepository,
} from '@data/repositories/order';
import { Order } from '@domain/models';
import { CreateOrder, OrderData } from '@domain/useCases/order';

class CreateOrderService implements CreateOrder {
  constructor(
    private findOrderByTableRepository: FindOrderByTableRepository,
    private createOrderRepository: CreateOrderRepository
  ) {}
  async execute(input: OrderData): Promise<Partial<Order>> {
    const orderTable = await this.findOrderByTableRepository.execute(
      input.table
    );

    if (orderTable && !orderTable.status)
      throw new Error('Table already exists.');

    const { id, name, draft, status, table } =
      await this.createOrderRepository.execute(input);

    return {
      id,
      table,
      name,
      draft,
      status,
    };
  }
}

export { CreateOrderService };
