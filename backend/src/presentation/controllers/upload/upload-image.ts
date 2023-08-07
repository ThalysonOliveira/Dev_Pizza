import { UploadImage } from '@domain/useCases/upload';
import { getErrorResponse } from '@presentation/errors';

class UploadImageController {
  constructor(private uploadImage: UploadImage) {}

  async handle(image: File) {
    try {
      return this.uploadImage.execute(image);
    } catch (error) {
      return getErrorResponse(error);
    }
  }
}

export { UploadImageController };
