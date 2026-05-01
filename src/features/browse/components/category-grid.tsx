import {setIsHorizontalScrolling} from '@/contexts/horizontal-scroll-context';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {useGetCategories} from '../hooks/use-categories';

type CategoryGridProps = {
  activeCategoryId?: number;
  onSelect: (id: number) => void;
};

export const CategoryGrid = ({
  activeCategoryId,
  onSelect,
}: CategoryGridProps) => {
  const {data: categories, isLoading} = useGetCategories();

  if (isLoading) {
    return (
      <View className="px-6 py-8">
        <ActivityIndicator color="#C8522A" />
      </View>
    );
  }

  const allCategories = [{id: 0, name: 'ALL'}, ...(categories || [])];
  const mid = Math.ceil(allCategories.length / 2);
  const row1 = allCategories.slice(0, mid);
  const row2 = allCategories.slice(mid);

  return (
    <View className="border-b border-neutral-300">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        onScrollBeginDrag={() => setIsHorizontalScrolling(true)}
        onScrollEndDrag={() => setIsHorizontalScrolling(false)}
        className="px-6 py-8"
      >
        <View className="gap-y-3">
          <View className="flex-row gap-3">
            {row1.map(category => (
              <TouchableOpacity
                key={category.id}
                onPress={() => onSelect(category.id)}
                className={`min-w-[120px] border px-4 py-3 ${
                  activeCategoryId === category.id
                    ? 'border-primary-900 bg-primary-900'
                    : 'border-neutral-300'
                }`}
              >
                <Text
                  className={`text-center text-[10px] font-bold tracking-widest ${
                    activeCategoryId === category.id
                      ? 'text-white'
                      : 'text-primary-900'
                  }`}
                >
                  {category.name.toUpperCase()}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View className="flex-row gap-3">
            {row2.map(category => (
              <TouchableOpacity
                key={category.id}
                onPress={() => onSelect(category.id)}
                className={`min-w-[120px] border px-4 py-3 ${
                  activeCategoryId === category.id
                    ? 'border-primary-900 bg-primary-900'
                    : 'border-neutral-300'
                }`}
              >
                <Text
                  className={`text-center text-[10px] font-bold tracking-widest ${
                    activeCategoryId === category.id
                      ? 'text-white'
                      : 'text-primary-900'
                  }`}
                >
                  {category.name.toUpperCase()}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
