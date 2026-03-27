import { Text, TouchableOpacity, View } from "react-native";
import { categories } from "../data";
import { useState } from "react";

export const CategoryGrid = () => {
  const [active, setActive] = useState("FURNITURE");

  return (
    <View className="px-6 py-8 border-b border-neutral-300">
      <View className="flex-row flex-wrap gap-3">
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            onPress={() => setActive(category)}
            className={`w-[47%] py-3 border ${
              active === category
                ? "bg-primary-900 border-primary-900"
                : "border-neutral-300"
            }`}
          >
            <Text
              className={`text-[10px] font-bold tracking-widest text-center ${
                active === category ? "text-white" : "text-primary-900"
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
