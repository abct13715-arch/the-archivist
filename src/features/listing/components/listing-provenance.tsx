import {Text, View} from 'react-native';

type ListingProvenanceProps = {
  quote: string;
  description: string[];
};

export const ListingProvenance = ({
  quote,
  description,
}: ListingProvenanceProps) => {
  return (
    <View className="pt-16">
      <Text className="mb-8 text-[10px] uppercase tracking-label-md text-tertiary-500">
        Provenance &amp; Description
      </Text>

      <View className="mb-8 border-l-2 border-secondary-500 pl-4">
        <Text className="font-playfair text-2xl italic leading-snug text-brand-primary">
          &quot;{quote}&quot;
        </Text>
      </View>

      {description.map((paragraph, index) => (
        <Text
          key={index}
          className="mb-6 text-lg leading-relaxed text-tertiary-500"
        >
          {paragraph}
        </Text>
      ))}
    </View>
  );
};
