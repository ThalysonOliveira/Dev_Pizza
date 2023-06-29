import { ItemData, OrderData } from '@domain/useCases/order';
import {
  makeAddItemToOrder,
  makeCreateOrder,
  makeRemoveOrder,
} from '@factories/order';
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
    addItemToOrder: (
      _: never,
      { input }: InputType<ItemData>,
      { userId }: Context
    ) => {
      userIdContextValidate(userId);
      return makeAddItemToOrder().handle(input);
    },
  },
};
