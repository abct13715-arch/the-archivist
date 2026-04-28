import { useQuery } from '@tanstack/react-query';
import { categoryService } from '../services/category.service';

export const useGetCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data, error } = await categoryService.getCategories();

      if (error) throw new Error(error.message);
      return data;
    },
  });
};
