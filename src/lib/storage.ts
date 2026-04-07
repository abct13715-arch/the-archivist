import * as SecureStore from 'expo-secure-store';

/**
 * Utility for persisting data using Expo SecureStore.
 * SecureStore keys only allow alphanumeric, ".", "-", and "_".
 */
const sanitizeKey = (key: string) => key.replaceAll(/[^a-zA-Z0-9.\-_]/g, '_');

export const storage = {
  /**
   * Saves a value to secure storage.
   */
  async setItem<T>(key: string, value: T): Promise<void> {
    const safeKey = sanitizeKey(key);
    try {
      const stringValue =
        typeof value === 'string' ? value : JSON.stringify(value);

      await SecureStore.setItemAsync(safeKey, stringValue);
    } catch (error) {
      console.error(
        `Error setting item [${key}] as [${safeKey}] in SecureStore:`,
        error,
      );
      throw error;
    }
  },

  /**
   * Retrieves a value from secure storage.
   */
  async getItem<T>(key: string): Promise<T | undefined> {
    const safeKey = sanitizeKey(key);
    try {
      const result = await SecureStore.getItemAsync(safeKey);
      if (!result) return undefined;
      try {
        return JSON.parse(result);
      } catch {
        return result as unknown as T;
      }
    } catch (error) {
      console.error(
        `Error getting item [${key}] as [${safeKey}] from SecureStore:`,
        error,
      );
      return undefined;
    }
  },

  /**
   * Deletes a value from secure storage.
   */
  async deleteItem(key: string): Promise<void> {
    const safeKey = sanitizeKey(key);
    try {
      await SecureStore.deleteItemAsync(safeKey);
    } catch (error) {
      console.error(
        `Error deleting item [${key}] as [${safeKey}] from SecureStore:`,
        error,
      );
      throw error;
    }
  },
};
