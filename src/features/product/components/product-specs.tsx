import { Text, View } from "react-native";
import type { TProductSpecs } from "../data";

type SpecsProps = {
  specs: TProductSpecs;
};

export const ProductSpecs = ({ specs }: SpecsProps) => {
  const specItems = [
    { label: "Year", value: specs.year },
    { label: "Movement", value: specs.movement },
    { label: "Diameter", value: specs.diameter },
    { label: "Case Material", value: specs.caseMaterial },
    { label: "Condition", value: specs.condition },
    { label: "Accessories", value: specs.accessories },
  ].filter((item) => item.value);

  if (specItems.length === 0) return null;

  return (
    <View className="pt-12">
      <View className="border-t border-border">
        <View className="flex-row flex-wrap pt-12 px-5">
          {specItems.map((item) => (
            <View key={item.label} className="w-1/2 mb-12 pr-4">
              <Text className="text-[10px] uppercase tracking-widest text-tertiary-500 mb-2">
                {item.label}
              </Text>
              <Text className="text-xl font-playfair text-brand-primary">
                {item.value}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};
