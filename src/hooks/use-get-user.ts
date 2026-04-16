import {useEffect, useState} from 'react';
import {STORAGE_KEYS} from '@/constants/storage-keys';
import {User} from '@/models/user';

import {storage} from '@/lib/storage';

export const useGetUser = () => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const data = await storage.getItem<User>(STORAGE_KEYS.USER);
        setUser(data);
      } catch (error) {
        console.error('Failed to load user from storage:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadUser();
  }, []);

  return {user, isLoading};
};
