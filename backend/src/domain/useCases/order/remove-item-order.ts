interface RemoveItemOrder {
  execute: (itemId: string) => Promise<void>;
}

export { RemoveItemOrder };
