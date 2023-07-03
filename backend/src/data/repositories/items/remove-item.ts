interface RemoveItemRepository {
  execute: (itemId: string) => Promise<void>;
}

export { RemoveItemRepository };
