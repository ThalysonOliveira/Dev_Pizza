import {
  CreateCategoryRepository,
  FindCategoryByNameRepository,
} from '@data/repositories/categories';
import {
  CategoryData,
  CreateCategory,
} from '@domain/useCases/categories/create-category';

class CreateCategoryService implements CreateCategory {
  constructor(
    private createCategoryRepository: CreateCategoryRepository,
    private findCategoryByName: FindCategoryByNameRepository
  ) {}
  async execute({ name }: CategoryData): Promise<void> {
    const categoryNameAlreadyExist = await this.findCategoryByName.execute(
      name
    );

    if (categoryNameAlreadyExist)
      throw new Error('Category name already exist.');

    await this.createCategoryRepository.execute({ name });
  }
}

export { CreateCategoryService };
