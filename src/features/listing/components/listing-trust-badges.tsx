import {Ionicons} from '@expo/vector-icons';
import {Text, View} from 'react-native';

type TrustBadge = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
};

const trustBadges: TrustBadge[] = [
  {
    icon: 'shield-checkmark-outline',
    title: 'Authenticity Guaranteed',
    description:
      'Each piece in our archive undergoes expert verification by our curation team.',
  },
  {
    icon: 'cube-outline',
    title: 'Insured White-Glove Delivery',
    description:
      'Complimentary global shipping with full insurance coverage to your door.',
  },
];

export const ListingTrustBadges = () => {
  return (
    <View className="mt-10 gap-6 pb-10">
      {trustBadges.map(badge => (
        <View key={badge.title} className="flex-row items-start gap-4">
          <Ionicons
            name={badge.icon}
            size={20}
            color="#1A1A1A"
            className="mt-0.5"
          />
          <View className="flex-1">
            <Text className="mb-1 text-xs font-bold uppercase tracking-label-md text-brand-primary">
              {badge.title}
            </Text>
            <Text className="text-sm leading-relaxed text-tertiary-500">
              {badge.description}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};
