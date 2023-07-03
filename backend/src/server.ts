import 'dotenv/config';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';

import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

import { makeContext } from './factories/middlewares/context';

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: makeContext(),
});

const startServer = async (port: number) => {
  await server.start();
  server.applyMiddleware({ app });
  app.listen({ port }, () =>
    console.log(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    )
  );
};

const port = Number(process.env.PORT);

startServer(port);
