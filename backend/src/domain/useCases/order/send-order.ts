interface SendOrder {
  execute: (orderId: string) => Promise<void>;
}

export { SendOrder };
