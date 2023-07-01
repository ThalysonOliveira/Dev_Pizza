import { DetailOrderService } from '@data/services/order';
import { FindAllItemsByOrderIdPrisma } from '@infra/database/prisma/repositories/items';
import { DetailOrderController } from '@presentation/controllers/order';

const makeDetailOrder = () => {
  const findAllItemsByOrderIdRepository = new FindAllItemsByOrderIdPrisma();
  const detailOrderService = new DetailOrderService(
    findAllItemsByOrderIdRepository
  );
  return new DetailOrderController(detailOrderService);
};

export { makeDetailOrder };
