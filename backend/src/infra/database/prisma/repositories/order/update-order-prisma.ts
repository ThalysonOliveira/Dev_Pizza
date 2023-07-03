import { UpdateOrderRepository } from '@data/repositories/order';
import prismaClient from '../..';

class UpdateOrderPrisma implements UpdateOrderRepository {
  async execute(orderId: string): Promise<void> {
    await prismaClient.order.update({
      where: {
        id: orderId,
      },
      data: {
        draft: false,
      },
    });
  }
}

export { UpdateOrderPrisma };
