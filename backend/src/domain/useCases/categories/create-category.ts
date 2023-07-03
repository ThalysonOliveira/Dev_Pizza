type CategoryData = {
  name: string;
};

interface CreateCategory {
  execute: (input: CategoryData) => Promise<void>;
}

export { CreateCategory, CategoryData };
