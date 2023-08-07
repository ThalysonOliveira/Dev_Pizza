interface UploadImage {
  execute: (image: File) => Promise<void>;
}

export { UploadImage };
