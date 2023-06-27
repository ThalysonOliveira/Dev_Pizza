import { ProductData } from '@domain/useCases/products';
import { makeCreateProduct } from '@factories/products';
import { InputType } from '@type/generics';
import { Context } from '@type/middlewares';
import { userIdContextValidate } from '@utils/context-validate';

export default {
  Mutation: {
    createProduct: (
      _: never,
      { input }: InputType<ProductData>,
      { userId }: Context
    ) => {
      userIdContextValidate(userId);
      return makeCreateProduct().handle(input);
    },
  },
};
