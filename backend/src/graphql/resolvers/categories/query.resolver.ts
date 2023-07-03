import { makeFindAllCategory } from '@factories/categories';
import { Context } from '@type/middlewares';
import { userIdContextValidate } from '@utils/context-validate';

export default {
  Query: {
    findAllCategory: (_: never, input: never, { userId }: Context) => {
      userIdContextValidate(userId);
      return makeFindAllCategory().handle();
    },
  },
};
