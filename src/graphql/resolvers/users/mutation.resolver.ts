export default {
  Mutation: {
    createUser: (_: never, input: unknown) => {
      console.log(input);
      return 'Good';
    },
  },
};
