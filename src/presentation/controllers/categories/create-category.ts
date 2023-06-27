import {
  CategoryData,
  CreateCategory,
} from '@domain/useCases/categories/create-category';
import { getErrorResponse } from '@presentation/errors';

class CreateCategoryController {
  constructor(private createCategory: CreateCategory) {}
  async handle(input: CategoryData) {
    try {
      await this.createCategory.execute(input);
      return 'Category created with success.';
    } catch (error) {
      return getErrorResponse(error);
    }
  }
}

export { CreateCategoryController };
