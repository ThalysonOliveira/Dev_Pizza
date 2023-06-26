type CategoryData = {
  name: string;
};

interface CreateCategory {
  execute: (input: CategoryData) => Promise<string>;
}

export { CreateCategory, CategoryData };
