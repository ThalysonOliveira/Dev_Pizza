import { FindAllOrderNoDraftRepository } from '@data/repositories/order';
import { Order } from '@domain/models';
import prismaClient from '../..';

class FindAllOrderNoDraftPrisma implements FindAllOrderNoDraftRepository {
  execute(): Promise<Order[]> {
    return prismaClient.order.findMany({
      where: {
        draft: false,
        status: false,
      },
    }) as Promise<Order[]>;
  }
}

export { FindAllOrderNoDraftPrisma };
