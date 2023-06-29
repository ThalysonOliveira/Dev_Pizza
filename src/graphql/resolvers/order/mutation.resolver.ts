import { OrderData } from '@domain/useCases/order';
import { makeCreateOrder, makeRemoveOrder } from '@factories/order';
import { InputType } from '@type/generics';
import { Context } from '@type/middlewares';
import { userIdContextValidate } from '@utils/context-validate';

export default {
  Mutation: {
    createOrder: (
      _: never,
      { input }: InputType<OrderData>,
      { userId }: Context
    ) => {
      userIdContextValidate(userId);
      return makeCreateOrder().handle(input);
    },
    removeOrder: (
      _: never,
      { input: { orderId } }: InputType<{ orderId: string }>,
      { userId }: Context
    ) => {
      userIdContextValidate(userId);
      return makeRemoveOrder().handle(orderId);
    },
  },
};
