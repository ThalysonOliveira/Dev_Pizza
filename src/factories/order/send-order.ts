import { SendOrderService } from '@data/services/order';
import { UpdateOrderPrisma } from '@infra/database/prisma/repositories/order';
import { SendOrderController } from '@presentation/controllers/order';

const makeSendOrder = () => {
  const updateOrderRepository = new UpdateOrderPrisma();
  const sendOderService = new SendOrderService(updateOrderRepository);
  return new SendOrderController(sendOderService);
};

export { makeSendOrder };
