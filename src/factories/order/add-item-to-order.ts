import { AddItemToOrderService } from '@data/services/order';
import { CreateItemPrisma } from '@infra/database/prisma/repositories/items';
import { AddItemToOrderController } from '@presentation/controllers/order';

const makeAddItemToOrder = () => {
  const createItemRepository = new CreateItemPrisma();
  const addItemToOrderService = new AddItemToOrderService(createItemRepository);
  return new AddItemToOrderController(addItemToOrderService);
};

export { makeAddItemToOrder };
