import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { UploadImage } from '@data/protocols/upload';
import { getErrorResponse } from '@presentation/errors';

const SDK_REGION = process.env.SDK_REGION;
const SDK_ACCESS_KEY_ID = process.env.SDK_ACCESS_KEY_ID;
const SDK_SECRET_ACCESS_KEY_ID = process.env.SDK_SECRET_ACCESS_KEY_ID;
const SDK_BUCKET_NAME = process.env.SDK_BUCKET_NAME;

class UploadImageAdapter implements UploadImage {
  private readonly client: S3Client;

  constructor() {
    this.client = new S3Client({
      region: SDK_REGION,
      credentials: {
        accessKeyId: SDK_ACCESS_KEY_ID,
        secretAccessKey: SDK_SECRET_ACCESS_KEY_ID,
      },
    });
  }

  async execute(image: File): Promise<void> {
    try {
      const command = new PutObjectCommand({
        Bucket: SDK_BUCKET_NAME,
        Key: image.name,
        Body: Buffer.from(JSON.stringify(image)),
        ContentType: image.type,
      });
      await this.client.send(command);
    } catch (error) {
      return getErrorResponse(error);
    }
  }
}

export { UploadImageAdapter };
