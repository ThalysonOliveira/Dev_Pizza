interface RemoveOrder {
  execute: (orderId: string) => Promise<void>;
}

export { RemoveOrder };
