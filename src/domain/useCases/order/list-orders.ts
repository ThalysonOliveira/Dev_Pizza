import { Order } from '@domain/models';

interface ListOrders {
  execute: () => Promise<Partial<Order[]>>;
}

export { ListOrders };
