/* eslint-disable no-unused-vars */
import { Authentication } from '../../../domain/useCases/authentication/authenticate';
import { Encrypter, Token } from '../../protocols';
import { FindUserByEmailRepository } from '../../repositories/users/find-user-by-email';

class AuthenticationService implements Authentication {
  constructor(
    private findUserByEmailRepository: FindUserByEmailRepository,
    private encrypter: Encrypter,
    private token: Token
  ) {}
  async execute(email: string, password: string): Promise<string> {
    const userAlreadyExist = await this.findUserByEmailRepository.execute(
      email
    );

    if (!userAlreadyExist) throw new Error('Email/password invalid.');

    const passwordCompare = this.encrypter.compareEncrypt(
      password,
      userAlreadyExist.password
    );

    if (!passwordCompare) throw new Error('Email/password invalid.');

    return this.token.createToken(userAlreadyExist);
  }
}

export { AuthenticationService };
