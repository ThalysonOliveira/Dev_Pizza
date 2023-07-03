import { makeDetailUser } from '@factories/users';
import { Context } from '@type/middlewares';
import { userIdContextValidate } from '@utils/context-validate';

export default {
  Query: {
    detailUser: (_: never, _input: never, { userId }: Context) => {
      userIdContextValidate(userId);
      return makeDetailUser().handle(userId);
    },
  },
};
