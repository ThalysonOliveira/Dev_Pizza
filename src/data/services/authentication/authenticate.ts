import { Token } from '@data/protocols';
import { CompareEncrypt } from '@data/protocols/encrypter';
import { FindUserByEmailRepository } from '@data/repositories/users';
import { Authentication } from '@domain/useCases/authentication';
import { authenticationFailed } from '@presentation/errors';

class AuthenticationService implements Authentication {
  constructor(
    private findUserByEmailRepository: FindUserByEmailRepository,
    private compareEncrypt: CompareEncrypt,
    private token: Token
  ) {}
  async execute(email: string, password: string): Promise<string> {
    const userAlreadyExist = await this.findUserByEmailRepository.execute(
      email
    );

    if (!userAlreadyExist) return authenticationFailed();

    const passwordCompare = this.compareEncrypt.execute(
      password,
      userAlreadyExist.password
    );

    if (!passwordCompare) return authenticationFailed();

    return this.token.createToken(userAlreadyExist);
  }
}

export { AuthenticationService };
