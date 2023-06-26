type TokenPayload = {
  id: string;
  iat: number;
  exp: number;
};

interface VerifyToken {
  execute: (token: string) => TokenPayload;
}

export { VerifyToken, TokenPayload };
