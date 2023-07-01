interface UpdateOrderToStatusTrueRepository {
  execute: (orderId: string) => Promise<void>;
}

export { UpdateOrderToStatusTrueRepository };
