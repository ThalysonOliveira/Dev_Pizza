import { RemoveOrderService } from '@data/services/order';
import { RemoveOrderPrisma } from '@infra/database/prisma/repositories/order';
import { RemoveOrderController } from '@presentation/controllers/order';

const makeRemoveOrder = () => {
  const removeOrderRepository = new RemoveOrderPrisma();
  const removeOrderService = new RemoveOrderService(removeOrderRepository);
  return new RemoveOrderController(removeOrderService);
};

export { makeRemoveOrder };
