import { RemoveOrderRepository } from '@data/repositories/order';
import prismaClient from '../..';

class RemoveOrderPrisma implements RemoveOrderRepository {
  async execute(orderId: string): Promise<void> {
    await prismaClient.order.delete({
      where: {
        id: orderId,
      },
    });
  }
}

export { RemoveOrderPrisma };
