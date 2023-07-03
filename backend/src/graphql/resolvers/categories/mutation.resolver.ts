import { CategoryData } from '@domain/useCases/categories/create-category';
import { makeCreateCategory } from '@factories/categories';
import { InputType } from '@type/generics';
import { Context } from '@type/middlewares';
import { userIdContextValidate } from '@utils/context-validate';

export default {
  Mutation: {
    createCategory: (
      _: never,
      { input }: InputType<CategoryData>,
      { userId }: Context
    ) => {
      userIdContextValidate(userId);
      return makeCreateCategory().handle(input);
    },
  },
};
