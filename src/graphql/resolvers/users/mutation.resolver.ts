import { InputType } from '../../../types';
import { UserData } from '../../../domain/useCases/users/create-user';
import { makeCreateUser } from '../../../factories/users/create-user';

export default {
  Mutation: {
    createUser: (_: never, { input }: InputType<UserData>) =>
      makeCreateUser().handle(input),
  },
};
