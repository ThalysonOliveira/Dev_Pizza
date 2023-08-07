import { UploadImageService } from '@data/services/upload';
import { UploadImageAdapter } from '@infra/upload';
import { UploadImageController } from '@presentation/controllers/upload';

const makeUploadImage = () => {
  const uploadImageAdapter = new UploadImageAdapter();
  const uploadImageService = new UploadImageService(uploadImageAdapter);
  return new UploadImageController(uploadImageService);
};

export { makeUploadImage };
