import { CreateProduct, ProductData } from '@domain/useCases/products';
import { getErrorResponse } from '@presentation/errors';

class CreateProductController {
  constructor(private createProduct: CreateProduct) {}

  async handle(input: ProductData): Promise<string> {
    try {
      await this.createProduct.execute(input);

      return 'Product created with success.';
    } catch (error) {
      return getErrorResponse(error);
    }
  }
}

export { CreateProductController };
