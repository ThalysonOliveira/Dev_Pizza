interface RemoveOrderRepository {
  execute: (orderId: string) => Promise<void>;
}

export { RemoveOrderRepository };
