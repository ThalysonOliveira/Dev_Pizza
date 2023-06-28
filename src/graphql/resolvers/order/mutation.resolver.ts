import { OrderData } from '@domain/useCases/order';
import { makeCreateOrder } from '@factories/order';
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
  },
};
