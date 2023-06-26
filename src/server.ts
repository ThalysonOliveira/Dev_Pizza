import 'dotenv/config';
import { ApolloServer } from 'apollo-server';

import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

import { makeContext } from './factories/middlewares/context';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: makeContext(),
});

server.listen().then(({ url }) => console.log(`Server running in ${url}`));
