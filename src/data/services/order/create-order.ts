import {
  CreateOrderRepository,
  FindOrderByTableRepository,
} from '@data/repositories/order';
import { CreateOrder, OrderData } from '@domain/useCases/order';

class CreateOrderService implements CreateOrder {
  constructor(
    private findOrderByTableRepository: FindOrderByTableRepository,
    private createOrderRepository: CreateOrderRepository
  ) {}
  async execute({ table, name }: OrderData): Promise<void> {
    const orderTable = await this.findOrderByTableRepository.execute(table);

    if (orderTable) throw new Error('Table already exists.');

    await this.createOrderRepository.execute({ table, name });
  }
}

export { CreateOrderService };
