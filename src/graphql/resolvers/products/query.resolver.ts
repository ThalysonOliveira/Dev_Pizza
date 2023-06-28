import { makeListAllProductsByCategory } from '@factories/products';
import { InputType } from '@type/generics';
import { Context } from '@type/middlewares';
import { userIdContextValidate } from '@utils/context-validate';

export default {
  Query: {
    listAllProductsByCategory: (
      _: never,
      { input: { categoryId } }: InputType<{ categoryId: string }>,
      { userId }: Context
    ) => {
      userIdContextValidate(userId);
      return makeListAllProductsByCategory().handle(categoryId);
    },
  },
};
