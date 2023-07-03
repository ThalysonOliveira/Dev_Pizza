import { RemoveItemOrderService } from '@data/services/order';
import { RemoveItemPrisma } from '@infra/database/prisma/repositories/items';
import { RemoveItemOrderController } from '@presentation/controllers/order';

const makeRemoveItemOrder = () => {
  const removeItemRepository = new RemoveItemPrisma();
  const removeItemOrderService = new RemoveItemOrderService(
    removeItemRepository
  );
  return new RemoveItemOrderController(removeItemOrderService);
};

export { makeRemoveItemOrder };
