import { FindAllCategoryRepository } from '@data/repositories/categories';
import { Category } from '@domain/models/category';
import { FindAllCategory } from '@domain/useCases/categories';

class FindAllCategoryService implements FindAllCategory {
  constructor(private findAllCategory: FindAllCategoryRepository) {}

  async execute(): Promise<Partial<Category>[]> {
    const findAllCategoryResult = await this.findAllCategory.execute();

    return findAllCategoryResult.map(({ id, name }) => ({ id, name }));
  }
}
export { FindAllCategoryService };
