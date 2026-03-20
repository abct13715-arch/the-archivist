import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useState } from "react";
import {
  Dimensions,
  ImageSourcePropType,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export type ProductImage = {
  id: string;
  image: ImageSourcePropType;
  condition: string;
  title: string;
  price: string;
  curatedBy: string;
  rating: number;
  totalRatings: number;
};

type ProductDetailProps = {
  images: ProductImage[];
  onAddToCollection?: () => void;
  onSaveLater?: () => void;
};

export const ProductDetail = ({
  images,
  onAddToCollection,
  onSaveLater,
}: ProductDetailProps) => {
  const [selectedId, setSelectedId] = useState(images[0]?.id);

  const selected = images.find((img) => img.id === selectedId) ?? images[0];

  return (
    <ScrollView
      style={{ backgroundColor: Colors.brand.neutral }}
      showsVerticalScrollIndicator={false}
    >
      <Image
        source={selected.image}
        contentFit="cover"
        style={{ width, aspectRatio: 1 }}
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ padding: 12, gap: 8 }}
        style={{
          borderBottomColor: Colors.light.border,
          borderBottomWidth: 0.5,
        }}
      >
        {images.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => setSelectedId(item.id)}
            style={{
              borderColor:
                selectedId === item.id
                  ? Colors.brand.secondary
                  : Colors.light.border,
              borderWidth: selectedId === item.id ? 1.5 : 0,
            }}
          >
            <Image
              source={item.image}
              contentFit="cover"
              style={{
                width: 60,
                height: 60,
              }}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View className="px-5 pt-5 pb-10 gap-4">
        <View
          style={{
            backgroundColor: Colors.light.text,
            alignSelf: "flex-start",
          }}
          className="px-2 py-1"
        >
          <Text
            style={{ color: Colors.brand.neutral, letterSpacing: 1.5 }}
            className="text-xs"
          >
            {selected.condition}
          </Text>
        </View>

        <Text
          style={{
            color: Colors.light.text,
            fontFamily: "PlayfairDisplay_700Bold",
            lineHeight: 36,
          }}
          className="text-3xl"
        >
          {selected.title}
        </Text>

        <View className="flex-row items-baseline gap-2">
          <Text
            style={{
              color: Colors.light.text,
              fontFamily: "PlayfairDisplay_700Bold",
            }}
            className="text-2xl"
          >
            {selected.price}
          </Text>
          <Text
            style={{ color: Colors.light.textSecondary, letterSpacing: 1 }}
            className="text-xs"
          >
            TAX INCLUDED
          </Text>
        </View>

        <View
          style={{
            borderTopColor: Colors.light.border,
            borderBottomColor: Colors.light.border,
          }}
          className="border-t border-b py-3 flex-row justify-between items-center"
        >
          <View className="flex-row items-center gap-3">
            <View
              style={{ borderColor: Colors.light.border }}
              className="border p-2"
            >
              <Ionicons
                name="person-outline"
                size={16}
                color={Colors.light.text}
              />
            </View>
            <View>
              <Text
                style={{ color: Colors.light.textSecondary, letterSpacing: 1 }}
                className="text-xs"
              >
                CURATED BY
              </Text>
              <Text
                style={{
                  color: Colors.light.text,
                  fontFamily: "PlayfairDisplay_700Bold",
                }}
                className="text-sm"
              >
                {selected.curatedBy}
              </Text>
            </View>
          </View>
          <View className="flex-row items-center gap-1">
            <Ionicons name="star" size={14} color={Colors.brand.secondary} />
            <Text
              style={{ color: Colors.light.text }}
              className="text-sm font-bold"
            >
              {selected.rating.toFixed(1)}
            </Text>
            <Text
              style={{ color: Colors.light.textSecondary }}
              className="text-xs"
            >
              ({selected.totalRatings})
            </Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={onAddToCollection}
          style={{ backgroundColor: Colors.brand.secondary }}
          className="py-4 items-center"
        >
          <Text
            style={{ color: Colors.light.surface, letterSpacing: 2 }}
            className="text-xs font-bold"
          >
            ADD TO COLLECTION
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onSaveLater}
          style={{ borderColor: Colors.light.border }}
          className="border py-4 items-center flex-row justify-center gap-2"
        >
          <Ionicons
            name="bookmark-outline"
            size={14}
            color={Colors.light.text}
          />
          <Text
            style={{ color: Colors.light.text, letterSpacing: 2 }}
            className="text-xs"
          >
            SAVE FOR LATER
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
