import { Token, TokenPayload } from '@data/protocols';
import { sign, verify } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as string;

class TokenAdapter implements Token {
  createToken(value: any): string {
    return sign({ id: value.id }, JWT_SECRET, { expiresIn: '7d' });
  }

  verifyToken(token: string): TokenPayload {
    return verify(token, JWT_SECRET) as TokenPayload;
  }
}

export { TokenAdapter };
