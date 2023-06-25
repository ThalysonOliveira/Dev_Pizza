import { Token } from '../../../data/protocols';
import { sign } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as string;

class TokenAdapter implements Token {
  createToken(value: any): string {
    return sign({ id: value.id }, JWT_SECRET, { expiresIn: '7d' });
  }
}

export { TokenAdapter };
