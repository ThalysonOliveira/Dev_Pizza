import { Product } from '@domain/models';
import { ListAllProductsByCategory } from '@domain/useCases/products';
import { ListAllProductsByCategoryPrisma } from '@infra/database/prisma/repositories/products';

class ListAllProductsByCategoryService implements ListAllProductsByCategory {
  constructor(
    private listAllProductsByCategoryRepository: ListAllProductsByCategoryPrisma
  ) {}
  async execute(categoryId: string): Promise<Partial<Product>[]> {
    const listAllProductsByCategory =
      await this.listAllProductsByCategoryRepository.execute(categoryId);

    return listAllProductsByCategory.map(
      ({ id, name, price, description, banner, category_id }) => ({
        id,
        name,
        price,
        description,
        banner,
        categoryId: category_id,
      })
    );
  }
}

export { ListAllProductsByCategoryService };
