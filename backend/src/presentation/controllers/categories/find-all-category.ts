import { FindAllCategory } from '@domain/useCases/categories';
import { getErrorResponse } from '@presentation/errors';

class FindAllCategoryController {
  constructor(private findAllCategory: FindAllCategory) {}

  handle() {
    try {
      return this.findAllCategory.execute();
    } catch (error) {
      return getErrorResponse(error);
    }
  }
}

export { FindAllCategoryController };
