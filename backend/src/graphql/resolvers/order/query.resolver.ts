import { makeDetailOrder, makeListOrders } from '@factories/order';
import { InputType } from '@type/generics';
import { Context } from '@type/middlewares';
import { userIdContextValidate } from '@utils/context-validate';

export default {
  Query: {
    listOrders: (_: never, input: never, { userId }: Context) => {
      userIdContextValidate(userId);
      return makeListOrders().handle();
    },
    detailOrder: (
      _: never,
      { input: { orderId } }: InputType<{ orderId: string }>,
      { userId }: Context
    ) => {
      userIdContextValidate(userId);
      return makeDetailOrder().handle(orderId);
    },
  },
};
