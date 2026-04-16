import {useEffect, useState} from 'react';
import {STORAGE_KEYS} from '@/constants/storage-keys';

import {storage} from '@/lib/storage';

export function useAuth() {
  const [user, setUser] = useState<{id: string; name: string} | null>(null);
  const [isGuest, setIsGuest] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const savedUser = await storage.getItem<{id: string; name: string}>(
        STORAGE_KEYS.USER,
      );
      const guest = await storage.getItem<boolean>('guest');

      if (savedUser) setUser(savedUser);
      if (guest) setIsGuest(true);

      setLoading(false);
    };

    load();
  }, []);

  const login = async (id: string, name: string) => {
    const newUser = {id, name};
    await storage.setItem(STORAGE_KEYS.USER, newUser);
    setUser(newUser);
    setIsGuest(false);
  };

  const loginAsGuest = async () => {
    await storage.setItem('guest', true);
    setIsGuest(true);
  };

  const logout = async () => {
    await storage.deleteItem(STORAGE_KEYS.USER);
    await storage.deleteItem('guest');
    setUser(null);
    setIsGuest(false);
  };

  return {
    user,
    isGuest,
    loading,
    login,
    loginAsGuest,
    logout,
  };
}
