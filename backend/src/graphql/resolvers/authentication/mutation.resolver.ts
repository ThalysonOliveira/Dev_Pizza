import { makeAuthentication } from '@factories/authentication/authenticate';
import { InputType } from '@type/generics';

export default {
  Mutation: {
    authentication: (
      _: never,
      {
        input: { email, password },
      }: InputType<{ email: string; password: string }>
    ) => makeAuthentication().handle(email, password),
  },
};
