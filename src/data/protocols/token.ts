/* eslint-disable no-unused-vars */

type TokenPayload = {
  id: string;
  iat: number;
  exp: number;
};

interface Token {
  createToken: (value: any) => string;
  verifyToken: (token: string) => TokenPayload;
}

export { Token, TokenPayload };
