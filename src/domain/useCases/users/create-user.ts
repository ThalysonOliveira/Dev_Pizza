/* eslint-disable no-unused-vars */
type UserData = {
  name: string;
  email: string;
  password: string;
};

interface CreateUser {
  execute: (input: UserData) => Promise<void>;
}

export { CreateUser, UserData };
