import { ListAllProductsByCategory } from '@domain/useCases/products';

class ListAllProductsByCategoryController {
  constructor(private listAllProductsByCategory: ListAllProductsByCategory) {}

  handle(categoryId: string) {
    return this.listAllProductsByCategory.execute(categoryId);
  }
}

export { ListAllProductsByCategoryController };
