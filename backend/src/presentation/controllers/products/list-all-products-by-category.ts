import { ListAllProductsByCategory } from '@domain/useCases/products';
import { getErrorResponse } from '@presentation/errors';

class ListAllProductsByCategoryController {
  constructor(private listAllProductsByCategory: ListAllProductsByCategory) {}

  handle(categoryId: string) {
    try {
      return this.listAllProductsByCategory.execute(categoryId);
    } catch (error) {
      return getErrorResponse(error);
    }
  }
}

export { ListAllProductsByCategoryController };
