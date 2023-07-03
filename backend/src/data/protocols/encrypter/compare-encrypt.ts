interface CompareEncrypt {
  execute: (compareValue: string, hashValue: string) => boolean;
}

export { CompareEncrypt };
