import { CreateOrderService } from '@data/services/order';
import {
  CreateOrderPrisma,
  FindOrderByTablePrisma,
} from '@infra/database/prisma/repositories/order';
import { CreateOrderController } from '@presentation/controllers/order';

const makeCreateOrder = () => {
  const createOrderRepository = new CreateOrderPrisma();
  const findOrderByTableRepository = new FindOrderByTablePrisma();
  const createOrderService = new CreateOrderService(
    findOrderByTableRepository,
    createOrderRepository
  );
  return new CreateOrderController(createOrderService);
};

export { makeCreateOrder };
