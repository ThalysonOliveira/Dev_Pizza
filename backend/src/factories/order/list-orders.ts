import { ListOrdersService } from '@data/services/order';
import { FindAllOrderNoDraftPrisma } from '@infra/database/prisma/repositories/order';
import { ListOrdersController } from '@presentation/controllers/order';

const makeListOrders = () => {
  const findAllOrderNoDraftRepository = new FindAllOrderNoDraftPrisma();
  const listOrdersService = new ListOrdersService(
    findAllOrderNoDraftRepository
  );
  return new ListOrdersController(listOrdersService);
};

export { makeListOrders };
