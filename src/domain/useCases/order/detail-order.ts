import { RelatedItem } from '@domain/models';

interface DetailOrder {
  execute: (orderId: string) => Promise<Partial<RelatedItem>[]>;
}

export { DetailOrder };
