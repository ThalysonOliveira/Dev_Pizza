interface UpdateOrderRepository {
  execute: (orderId: string) => Promise<void>;
}

export { UpdateOrderRepository };
