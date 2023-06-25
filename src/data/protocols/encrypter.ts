/* eslint-disable no-unused-vars */
interface Encrypter {
  encrypt: (value: string) => string;
  compareEncrypt: (compareValue: string, hashValue: string) => boolean;
}

export { Encrypter };
