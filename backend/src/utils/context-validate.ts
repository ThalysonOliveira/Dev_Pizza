const userIdContextValidate = (userContextId: string) => {
  if (!userContextId) throw new Error('User not authorized.');
};

const userIdOperationValidate = (
  userContextId: string,
  userIdOperation: string
) => {
  if (userContextId !== userIdOperation) throw new Error('User forbidden.');
};

export { userIdContextValidate, userIdOperationValidate };
