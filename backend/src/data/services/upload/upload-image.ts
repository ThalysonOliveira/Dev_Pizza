import { UploadImage } from '@domain/useCases/upload';
import { UploadImage as UploadImageProtocol } from '@data/protocols/upload';

class UploadImageService implements UploadImage {
  constructor(private uploadImage: UploadImageProtocol) {}

  async execute(image: File): Promise<void> {
    await this.uploadImage.execute(image);
  }
}

export { UploadImageService };
