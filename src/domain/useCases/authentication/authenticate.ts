interface Authentication {
  execute: (email: string, password: string) => Promise<string>;
}

export { Authentication };
