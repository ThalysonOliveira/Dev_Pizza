type ProductData = {
  name: string;
  price: string;
  description: string;
  categoryId: string;
};

interface CreateProduct {
  execute: (input: ProductData) => Promise<void>;
}

export { CreateProduct, ProductData };
