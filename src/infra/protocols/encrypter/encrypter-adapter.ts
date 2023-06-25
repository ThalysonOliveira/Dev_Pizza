/* eslint-disable no-unused-vars */
import { Encrypter } from '../../../data/protocols/encrypter';
import { compareSync, hashSync } from 'bcrypt';

class EncrypterAdapter implements Encrypter {
  constructor(private readonly salt: number) {}

  encrypt(value: string): string {
    return hashSync(value, this.salt);
  }

  compareEncrypt(compareValue: string, hashValue: string): boolean {
    return compareSync(compareValue, hashValue);
  }
}

export { EncrypterAdapter };
