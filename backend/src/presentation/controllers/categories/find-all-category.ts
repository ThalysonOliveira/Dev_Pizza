import { FindAllCategory } from '@domain/useCases/categories';

class FindAllCategoryController {
  constructor(private findAllCategory: FindAllCategory) {}

  handle() {
    return this.findAllCategory.execute();
  }
}

export { FindAllCategoryController };
