import { Colors } from "@/constants/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useCallback, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TBrowseListing } from "../data";

type Props = {
  listing: TBrowseListing;
  isBookmarked?: boolean;
  onToggleBookmark?: (id: string, bookmark: boolean) => void;
};

export const BrowseListingCard = ({
  listing,
  isBookmarked = false,
  onToggleBookmark,
}: Props) => {
  const [bookmarked, setBookmarked] = useState(isBookmarked);

  const handleToggle = useCallback(() => {
    const newState = !bookmarked;
    setBookmarked(newState);
    if (onToggleBookmark) {
      onToggleBookmark(listing.id, newState);
    }
  }, [bookmarked, onToggleBookmark, listing.id]);

  const handlePress = useCallback(() => {
    router.push(`/listing/${listing.id}`);
  }, [listing.id]);

  return (
    <TouchableOpacity onPress={handlePress} className="w-[46%] mb-10">
      <View className="border border-neutral-300 relative mb-4">
        <Image
          source={listing.image}
          style={{ width: "100%", aspectRatio: 3 / 4 }}
          contentFit="cover"
        />
        <TouchableOpacity
          className="absolute top-3 right-3"
          onPress={handleToggle}
        >
          <MaterialIcons
            name={bookmarked ? "bookmark" : "bookmark-outline"}
            size={24}
            color={Colors.brand.secondary}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          />
        </TouchableOpacity>
      </View>
      <Text
        className="font-playfair text-lg text-primary-900 leading-tight mb-1"
        numberOfLines={2}
      >
        {listing.title}
      </Text>
      <Text className="text-[11px] font-bold tracking-widest text-secondary-500 uppercase">
        {listing.price}
      </Text>
    </TouchableOpacity>
  );
};
