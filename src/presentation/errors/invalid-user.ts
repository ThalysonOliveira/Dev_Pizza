import { GraphQLError } from 'graphql';

const invalidUserOrNotAuthorized = () => {
  throw new GraphQLError('Invalid user/Not authorized.');
};

export { invalidUserOrNotAuthorized };
