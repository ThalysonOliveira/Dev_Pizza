import { Order } from '@domain/models';

interface FindOrderByTableRepository {
  execute: (table: number) => Promise<Order>;
}

export { FindOrderByTableRepository };
