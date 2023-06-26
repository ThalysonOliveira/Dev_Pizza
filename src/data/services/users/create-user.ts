import {
  CreateUser,
  UserData,
} from '../../../domain/useCases/users/create-user';
import { Encrypter } from '../../protocols/encrypter';
import { CreateUserRepository } from '../../repositories/users/create-user';
import { FindUserByEmailRepository } from '../../repositories/users/find-user-by-email';

class CreateUserService implements CreateUser {
  constructor(
    private findUserByEmailRepository: FindUserByEmailRepository,
    private createUserRepository: CreateUserRepository,
    private encrypter: Encrypter
  ) {}
  async execute(input: UserData): Promise<void> {
    const emailAlreadyExist = await this.findUserByEmailRepository.execute(
      input.email
    );

    if (emailAlreadyExist) throw new Error('Email already exists.');

    const hashedPassword = this.encrypter.encrypt(input.password);

    Object.assign(input, { password: hashedPassword });

    await this.createUserRepository.execute(input);
  }
}

export { CreateUserService };
