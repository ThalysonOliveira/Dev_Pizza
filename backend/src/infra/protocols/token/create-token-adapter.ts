import { CreateToken } from '@data/protocols/token';
import { sign } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as string;

class CreateTokenAdapter implements CreateToken {
  execute(value: any): string {
    return sign({ id: value.id }, JWT_SECRET, { expiresIn: '7d' });
  }
}

export { CreateTokenAdapter };
