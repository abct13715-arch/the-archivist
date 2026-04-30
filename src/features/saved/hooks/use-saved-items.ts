import {useQuery} from '@tanstack/react-query';

import {savedItemService} from '../services/saved-item.service';

export const useGetSavedItems = () => {
  return useQuery({
    queryKey: ['saved_items'],
    queryFn: async () => {
      const {data, error} = await savedItemService.getSavedItems();
      if (error) throw new Error(error.message);
      return data;
    },
  });
};
