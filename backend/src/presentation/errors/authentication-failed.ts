import { GraphQLError } from 'graphql';

const authenticationFailed = () => {
  throw new GraphQLError('Email/password invalid.');
};

export { authenticationFailed };
