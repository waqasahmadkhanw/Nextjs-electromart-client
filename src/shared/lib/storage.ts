const isBrowser = typeof window !== "undefined";

export const storage = {
  get<T>(key: string): T | null {
    if (!isBrowser) return null;

    const item = localStorage.getItem(key);

    return item ? JSON.parse(item) : null;
  },


  set<T>(key: string, value: T): void {
    if (!isBrowser) return;

    localStorage.setItem(
      key,
      JSON.stringify(value)
    );
  },


  remove(key: string): void {
    if (!isBrowser) return;

    localStorage.removeItem(key);
  },


  clear(): void {
    if (!isBrowser) return;

    localStorage.clear();
  }
};