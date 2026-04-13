import { Text, View } from "react-native";

type ProductProvenanceProps = {
  quote: string;
  description: string[];
};

export const ProductProvenance = ({
  quote,
  description,
}: ProductProvenanceProps) => {
  return (
    <View className="pt-16">
      <Text className="text-[10px] uppercase tracking-label-md text-tertiary-500 mb-8">
        Provenance &amp; Description
      </Text>

      <View className="pl-4 border-l-2 border-secondary-500 mb-8">
        <Text className="text-2xl font-playfair text-brand-primary italic leading-snug">
          &quot;{quote}&quot;
        </Text>
      </View>

      {description.map((paragraph, index) => (
        <Text
          key={index}
          className="text-lg leading-relaxed text-tertiary-500 mb-6"
        >
          {paragraph}
        </Text>
      ))}
    </View>
  );
};