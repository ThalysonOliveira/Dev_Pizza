import { GraphQLError } from 'graphql';

const getErrorResponse = (error: unknown): GraphQLError => {
  if (error instanceof Error) {
    console.log({
      message: error.message,
      error: error.stack,
    });

    throw new GraphQLError(error.message, {
      extensions: { exception: { stacktrace: [] } },
    });
  }

  console.log({ error });
  throw new GraphQLError(error as string);
};

export { getErrorResponse };
