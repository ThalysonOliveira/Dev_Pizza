import { CreateProductService } from '@data/services/products';
import {
  CreateProductPrisma,
  FindProductByNamePrisma,
} from '@infra/database/prisma/repositories/products';
import { CreateProductController } from '@presentation/controllers/products';

const makeCreateProduct = () => {
  const findProductByNameRepository = new FindProductByNamePrisma();
  const createProductRepository = new CreateProductPrisma();
  const createProductService = new CreateProductService(
    createProductRepository,
    findProductByNameRepository
  );
  return new CreateProductController(createProductService);
};

export { makeCreateProduct };
