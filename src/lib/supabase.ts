import {createClient} from '@supabase/supabase-js';

import 'react-native-url-polyfill/auto';

import {storage} from './storage';

const supabaseStorageAdapter = {
  getItem: async (key: string) => {
    const value = await storage.getItem<string>(key);
    return value ?? null;
  },
  setItem: async (key: string, value: string) => {
    await storage.setItem(key, value);
  },
  removeItem: async (key: string) => {
    await storage.deleteItem(key);
  },
};

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL ?? '';
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'Supabase environment variables are missing. Check your .env file.',
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: supabaseStorageAdapter,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
});
