interface FinishedOrder {
  execute: (orderId: string) => Promise<void>;
}

export { FinishedOrder };
