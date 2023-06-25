const getErrorResponse = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }

  return error as string;
};

export { getErrorResponse };
