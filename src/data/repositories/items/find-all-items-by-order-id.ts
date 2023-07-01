import { RelatedItem } from '@domain/models';

interface FindAllItemsByOrderIdRepository {
  execute: (orderId: string) => Promise<RelatedItem[]>;
}

export { FindAllItemsByOrderIdRepository };
