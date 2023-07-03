import { FindOrderByTableRepository } from '@data/repositories/order';
import { Order } from '@domain/models';
import prismaClient from '../..';

class FindOrderByTablePrisma implements FindOrderByTableRepository {
  execute(table: number): Promise<Order> {
    return prismaClient.order.findFirst({
      where: {
        table,
      },
    }) as Promise<Order>;
  }
}

export { FindOrderByTablePrisma };
