type OrderData = {
  table: number;
  name?: string;
};

interface CreateOrder {
  execute: (input: OrderData) => Promise<void>;
}

export { CreateOrder, OrderData };
