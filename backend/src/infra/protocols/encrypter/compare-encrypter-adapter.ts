import { CompareEncrypt } from '@data/protocols/encrypter';
import { compareSync } from 'bcrypt';

class CompareEncrypterAdapter implements CompareEncrypt {
  execute(compareValue: string, hashValue: string): boolean {
    return compareSync(compareValue, hashValue);
  }
}

export { CompareEncrypterAdapter };
