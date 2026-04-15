import { Colors } from "@/constants/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { TSavedListing } from "../data";

type Props = {
  listing: TSavedListing;
};

export const SavedListingCard = ({ listing }: Props) => {
  const handlePress = () => {
    router.push(`/listing/${listing.id}`);
  };

  return (
    <View className="border border-neutral-300 bg-surface overflow-hidden">
      <View className="overflow-hidden">
        <Image
          source={listing.image}
          style={{ width: "100%", aspectRatio: 1 }}
          contentFit="cover"
        />
      </View>

      <View className="px-6 pt-6 border-t border-neutral-300">
        <View className="flex-row justify-between items-start mb-2">
          <Text
            className="font-playfair text-2xl text-primary-900 leading-tight flex-1 mr-2"
            numberOfLines={2}
          >
            {listing.title}
          </Text>
          <MaterialIcons
            name="bookmark"
            size={24}
            color={Colors.brand.secondary}
          />
        </View>

        <Text className="text-[10px] font-bold tracking-widest text-tertiary-500 uppercase mb-2">
          {listing.studio}
        </Text>

        <Text className="text-lg text-primary-900">{listing.price}</Text>
      </View>
      <View className="py-2 px-2">
        <TouchableOpacity
          onPress={handlePress}
          className="border border-primary-900 px-6 py-2"
        >
          <Text className="text-[10px] font-bold tracking-widest text-primary-900 uppercase text-center">
            VIEW PIECE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
