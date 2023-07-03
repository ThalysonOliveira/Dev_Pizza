import 'dotenv/config';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';

import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

// import { makeContext } from './factories/middlewares/context';

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // context: makeContext(),
});

const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
  app.listen({ port: 3002 }, () =>
    console.log(`🚀 Server ready at http://localhost:3002${server.graphqlPath}`)
  );
};

startServer();

// server.listen().then(({ url }) => console.log(`Server running in ${url}`));
