import { GraphQLError } from 'graphql';

const notAuthorized = () => {
  throw new GraphQLError('Not authorized.');
};

export { notAuthorized };
