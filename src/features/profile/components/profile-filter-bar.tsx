import {Colors} from '@/constants/theme';
import {Text, TouchableOpacity, View} from 'react-native';

type ProfileFilterBarProps = {
  filters: string[];
  selected: string;
  onSelect: (f: string) => void;
};

export const ProfileFilterBar = ({
  filters,
  selected,
  onSelect,
}: ProfileFilterBarProps) => (
  <View
    style={{borderBottomColor: Colors.light.border}}
    className="gap-2 border-b px-4 pb-3"
  >
    <Text
      style={{color: Colors.light.textSecondary, letterSpacing: 2}}
      className="mt-3 text-xs"
    >
      FILTERS
    </Text>
    {filters.map(f => (
      <TouchableOpacity
        key={f}
        onPress={() => onSelect(f)}
        className="flex-row items-center gap-2 py-1"
      >
        <View
          style={{
            width: 8,
            height: 8,
            borderRadius: 4,
            backgroundColor:
              selected === f ? Colors.brand.secondary : Colors.light.border,
          }}
        />
        <Text
          style={{
            color:
              selected === f ? Colors.light.text : Colors.light.textSecondary,
            letterSpacing: 1,
          }}
          className="text-xs"
        >
          {f}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);
