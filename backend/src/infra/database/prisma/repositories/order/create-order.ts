import { CreateOrderRepository } from '@data/repositories/order';
import { Order } from '@domain/models';
import { OrderData } from '@domain/useCases/order';
import prismaClient from '../..';

class CreateOrderPrisma implements CreateOrderRepository {
  execute(input: OrderData): Promise<Order> {
    return prismaClient.order.create({
      data: input,
    }) as Promise<Order>;
  }
}

export { CreateOrderPrisma };
