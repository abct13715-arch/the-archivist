import {useState} from 'react';
import {Colors} from '@/constants/theme';
import {Ionicons} from '@expo/vector-icons';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';

const categories = [
  'EVERYTHING',
  'CERAMICS',
  'FURNITURE',
  'SCULPTURE',
  'VINTAGE',
];

export const FilterBar = () => {
  const [selected, setSelected] = useState('EVERYTHING');

  return (
    <View
      style={{
        borderTopColor: Colors.light.border,
        borderBottomColor: Colors.light.border,
      }}
      className="flex-row items-center border-b border-t"
    >
      <TouchableOpacity
        style={{borderRightColor: Colors.light.border}}
        className="flex-row items-center gap-2 border-r px-4 py-4"
      >
        <Ionicons name="options-outline" size={18} color={Colors.light.text} />
        <View>
          <Text
            style={{color: Colors.light.text, letterSpacing: 2}}
            className="text-xs font-bold"
          >
            FILTER
          </Text>
          <Text
            style={{color: Colors.light.text, letterSpacing: 2}}
            className="text-xs font-bold"
          >
            ARCHIVE
          </Text>
        </View>
      </TouchableOpacity>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          gap: 24,
          alignItems: 'center',
        }}
      >
        {categories.map(cat => (
          <TouchableOpacity
            key={cat}
            onPress={() => setSelected(cat)}
            className="py-4"
          >
            <Text
              style={{
                color:
                  selected === cat
                    ? Colors.light.text
                    : Colors.light.textSecondary,
                letterSpacing: 2,
              }}
              className="text-xs"
            >
              {cat}
            </Text>
            {selected === cat && (
              <View
                style={{backgroundColor: Colors.light.text}}
                className="mt-1 h-px"
              />
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
