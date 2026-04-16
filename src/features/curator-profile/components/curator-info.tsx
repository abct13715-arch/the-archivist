import {Colors} from '@/constants/theme';
import {Text, View} from 'react-native';

type TCuratorStats = {
  selections: number;
  collections: number;
  years: number;
};

type CuratorInfoProps = {
  role: string;
  name: string;
  location: string;
  stats: TCuratorStats;
};

export const CuratorInfo = ({
  role,
  name,
  location,
  stats,
}: CuratorInfoProps) => {
  return (
    <View
      style={{
        backgroundColor: Colors.light.surface,
        borderColor: Colors.light.border,
      }}
      className="border p-8"
    >
      <View className="flex-col justify-between gap-8 md:flex-row md:items-end">
        <View>
          <Text
            style={{
              color: Colors.light.textSecondary,
              letterSpacing: 2,
            }}
            className="mb-2 text-xs"
          >
            {role.toUpperCase()}
          </Text>
          <Text
            style={{
              color: Colors.light.text,
              fontFamily: 'PlayfairDisplay_700Bold',
            }}
            className="text-5xl tracking-tighter"
          >
            {name}
          </Text>
          <Text
            style={{
              color: Colors.brand.secondary,
              letterSpacing: 2,
            }}
            className="mt-4 text-sm"
          >
            {location}
          </Text>
        </View>

        <View className="flex-row gap-8 border-t border-[#D8D8D0] pt-6 md:flex-col md:gap-4 md:border-l md:border-t-0 md:pl-8 md:pt-0">
          <View className="items-center md:items-start">
            <Text
              style={{
                color: Colors.light.text,
                fontFamily: 'PlayfairDisplay_700Bold',
              }}
              className="text-2xl"
            >
              {stats.selections}
            </Text>
            <Text
              style={{
                color: Colors.light.textSecondary,
                letterSpacing: 2,
              }}
              className="text-[10px] opacity-60"
            >
              SELECTIONS
            </Text>
          </View>
          <View className="items-center md:items-start">
            <Text
              style={{
                color: Colors.light.text,
                fontFamily: 'PlayfairDisplay_700Bold',
              }}
              className="text-2xl"
            >
              {stats.collections}
            </Text>
            <Text
              style={{
                color: Colors.light.textSecondary,
                letterSpacing: 2,
              }}
              className="text-[10px] opacity-60"
            >
              COLLECTIONS
            </Text>
          </View>
          <View className="items-center md:items-start">
            <Text
              style={{
                color: Colors.light.text,
                fontFamily: 'PlayfairDisplay_700Bold',
              }}
              className="text-2xl"
            >
              {stats.years}
            </Text>
            <Text
              style={{
                color: Colors.light.textSecondary,
                letterSpacing: 2,
              }}
              className="text-[10px] opacity-60"
            >
              YEARS
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
