import { Order } from '@domain/models';

type OrderData = {
  table: number;
  name?: string;
};

interface CreateOrder {
  execute: (input: OrderData) => Promise<Partial<Order>>;
}

export { CreateOrder, OrderData };
