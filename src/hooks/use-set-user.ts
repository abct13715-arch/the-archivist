import {useCallback} from 'react';
import {STORAGE_KEYS} from '@/constants/storage-keys';
import {User} from '@/models/user';

import {storage} from '@/lib/storage';

export const useSetUser = () => {
  const setUser = useCallback(async (user: User) => {
    await storage.setItem(STORAGE_KEYS.USER, user);
  }, []);

  const clearUser = useCallback(async () => {
    await storage.deleteItem(STORAGE_KEYS.USER);
  }, []);

  return {setUser, clearUser};
};
