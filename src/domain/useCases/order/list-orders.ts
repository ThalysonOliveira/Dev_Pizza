import { Order } from '@domain/models';

interface ListOrders {
  execute: (orderId: string) => Promise<Partial<Order[]>>;
}

export { ListOrders };
