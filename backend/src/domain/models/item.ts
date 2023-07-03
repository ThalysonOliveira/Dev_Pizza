import { Order } from './order';
import { Product } from './product';

type Item = {
  id: string;
  amount: number;
  created_at: Date;
  updated_at: Date;
  order_id: string;
  product_id: string;
};

type RelatedItem = {
  id: string;
  amount: number;
  created_at: Date;
  updated_at: Date;
  order_id: string;
  order: Order;
  product: Product;
  product_id: string;
};

export { Item, RelatedItem };
