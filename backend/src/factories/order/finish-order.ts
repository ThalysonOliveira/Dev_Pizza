import { FinishOrderService } from '@data/services/order';
import { UpdateOrderToStatusTruePrisma } from '@infra/database/prisma/repositories/order';
import { FinishOrderController } from '@presentation/controllers/order';

const makeFinishOrder = () => {
  const updateOrderToStatusTrueRepository = new UpdateOrderToStatusTruePrisma();
  const finishOrderService = new FinishOrderService(
    updateOrderToStatusTrueRepository
  );
  return new FinishOrderController(finishOrderService);
};

export { makeFinishOrder };
