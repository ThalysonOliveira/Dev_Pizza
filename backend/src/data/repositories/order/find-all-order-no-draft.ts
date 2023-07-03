import { Order } from '@domain/models';

interface FindAllOrderNoDraftRepository {
  execute: () => Promise<Order[]>;
}

export { FindAllOrderNoDraftRepository };
