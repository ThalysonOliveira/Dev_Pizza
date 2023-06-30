import { makeListOrders } from '@factories/order';
import { Context } from '@type/middlewares';
import { userIdContextValidate } from '@utils/context-validate';

export default {
  Query: {
    listOrders: (_: never, input: never, { userId }: Context) => {
      userIdContextValidate(userId);
      return makeListOrders().handle();
    },
  },
};
