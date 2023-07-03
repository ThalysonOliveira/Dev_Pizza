import { UserData } from '@domain/useCases/users';
import { makeCreateUser } from '@factories/users';
import { InputType } from '@type/generics';

export default {
  Mutation: {
    createUser: (_: never, { input }: InputType<UserData>) =>
      makeCreateUser().handle(input),
  },
};
