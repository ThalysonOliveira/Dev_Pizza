import { TokenPayload, VerifyToken } from '@data/protocols/token';
import { verify } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as string;

class VerifyTokenAdapter implements VerifyToken {
  execute(token: string): TokenPayload {
    return verify(token, JWT_SECRET) as TokenPayload;
  }
}

export { VerifyTokenAdapter };
