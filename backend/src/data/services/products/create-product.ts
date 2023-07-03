import {
  CreateProductRepository,
  FindProductByNameRepository,
} from '@data/repositories/products';
import { CreateProduct, ProductData } from '@domain/useCases/products';

class CreateProductService implements CreateProduct {
  constructor(
    private createProductRepository: CreateProductRepository,
    private findProductByNameRepository: FindProductByNameRepository
  ) {}
  async execute(input: ProductData): Promise<void> {
    const productNameAlreadyExist =
      await this.findProductByNameRepository.execute(input.name);

    if (productNameAlreadyExist) throw new Error('Product name already exist.');

    await this.createProductRepository.execute(input);
  }
}

export { CreateProductService };
