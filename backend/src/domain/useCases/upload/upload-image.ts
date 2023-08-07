interface UploadImage {
  execute: (image: File) => Promise<string>;
}

export { UploadImage };
