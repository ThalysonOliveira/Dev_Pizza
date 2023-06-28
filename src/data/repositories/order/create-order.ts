import { Order } from '@domain/models';
import { OrderData } from '@domain/useCases/order';

interface CreateOrderRepository {
  execute: (input: OrderData) => Promise<Order>;
}

export { CreateOrderRepository };
