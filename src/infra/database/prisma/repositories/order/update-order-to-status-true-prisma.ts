import { UpdateOrderToStatusTrueRepository } from '@data/repositories/order';
import prismaClient from '../..';

class UpdateOrderToStatusTruePrisma
  implements UpdateOrderToStatusTrueRepository
{
  async execute(orderId: string): Promise<void> {
    await prismaClient.order.update({
      where: {
        id: orderId,
      },
      data: {
        status: true,
      },
    });
  }
}

export { UpdateOrderToStatusTruePrisma };
