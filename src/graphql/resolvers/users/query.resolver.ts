import { makeDetailUser } from '../../../factories/users';
import { Context } from '../../../types/middlewares';

export default {
  Query: {
    detailUser: (_: never, _input: never, { userId }: Context) =>
      makeDetailUser().handle(userId),
  },
};
