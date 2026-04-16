import {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {categories} from '../data';

export const CategoryGrid = () => {
  const [active, setActive] = useState('FURNITURE');

  return (
    <View className="border-b border-neutral-300 px-6 py-8">
      <View className="flex-row flex-wrap gap-3">
        {categories.map(category => (
          <TouchableOpacity
            key={category}
            onPress={() => setActive(category)}
            className={`w-[47%] border py-3 ${
              active === category
                ? 'border-primary-900 bg-primary-900'
                : 'border-neutral-300'
            }`}
          >
            <Text
              className={`text-center text-[10px] font-bold tracking-widest ${
                active === category ? 'text-white' : 'text-primary-900'
              }`}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
