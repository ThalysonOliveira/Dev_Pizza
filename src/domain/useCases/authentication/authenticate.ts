/* eslint-disable no-unused-vars */
interface Authentication {
  execute: (email: string, password: string) => Promise<string>;
}

export { Authentication };
