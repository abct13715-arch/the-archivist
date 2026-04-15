import { IconSymbol } from "@/components/ui/icon-symbol";
import { Image } from "expo-image";
import { useMemo, useState } from "react";
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import type { TListingDetail } from "../data";
import { ListingProvenance } from "./listing-provenance";
import { ListingSpecs } from "./listing-specs";
import { ListingTrustBadges } from "./listing-trust-badges";

const { width } = Dimensions.get("window");

type ListingDetailProps = {
  listing: TListingDetail;
  onAddToCart?: () => void;
  onSaveLater?: () => void;
  showFullDetails?: boolean;
  onRelatedListingPress?: (listingId: string) => void;
};

export const ListingDetail = ({
  listing,
  onAddToCart,
  onSaveLater,
  showFullDetails = false,
  onRelatedListingPress,
}: ListingDetailProps) => {
  const allImages = useMemo(() => {
    const images: (typeof listing.image)[] = [];

    if (listing.images && listing.images.length > 0) {
      images.push(...listing.images);
    } else {
      images.push(listing.image);
      if (listing.relatedListings) {
        for (const rp of listing.relatedListings) {
          if (rp.image) images.push(rp.image);
        }
      }
    }

    return images;
  }, [listing]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedImage = allImages[selectedIndex] || listing.image;

  return (
    <ScrollView
      className="flex-1 bg-neutral-100"
      showsVerticalScrollIndicator={false}
    >
      <Image
        source={selectedImage}
        contentFit="cover"
        style={{ width, aspectRatio: 1 }}
      />

      {allImages.length > 1 && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ padding: 12, gap: 2 }}
          className="border-b border-border"
        >
          {allImages.map((img, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedIndex(index)}
              className={`border ${
                selectedIndex === index
                  ? "border-secondary-500"
                  : "border-border"
              } ${selectedIndex === index ? "border-2" : ""}`}
            >
              <Image
                source={img}
                contentFit="cover"
                style={{ width: 60, height: 60 }}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}

      <View className="px-5 pt-5 pb-10 gap-4">
        <View className="self-start px-2 py-1 border border-secondary-500">
          <Text className="text-[10px] font-bold uppercase tracking-label-lg text-secondary-500">
            {listing.condition}
          </Text>
        </View>

        <Text className="text-3xl lg:text-4xl font-playfair text-brand-primary leading-tight">
          {listing.title}
        </Text>

        {listing.subtitle && (
          <Text className="text-xl text-tertiary-500">{listing.subtitle}</Text>
        )}

        <View className="border-b border-border pb-10 mb-10">
          <Text className="text-3xl font-playfair text-brand-primary mb-2">
            {listing.price}
          </Text>
          <Text className="text-sm uppercase tracking-label-lg text-tertiary-500">
            {listing.priceLabel || "Available for immediate acquisition"}
          </Text>
        </View>

        <TouchableOpacity
          onPress={onAddToCart}
          className="bg-secondary-500 py-5 items-center"
        >
          <Text className="text-sm font-bold text-white tracking-label-lg">
            ADD TO CART
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onSaveLater}
          className="border border-brand-primary py-5 items-center flex-row justify-center gap-2"
        >
          <IconSymbol name="bookmark" size={14} color="#1A1A1A" />
          <Text className="text-sm tracking-label-lg text-brand-primary">
            SAVE FOR LATER
          </Text>
        </TouchableOpacity>

        <ListingTrustBadges />
      </View>

      {showFullDetails && listing.quote && listing.description && (
        <View className="px-5 pb-10">
          <ListingProvenance
            quote={listing.quote}
            description={listing.description}
          />
          {listing.specs && <ListingSpecs specs={listing.specs} />}
        </View>
      )}

      {listing.relatedListings && listing.relatedListings.length > 0 && (
        <View className="px-5 pb-10">
          <View className="mb-10">
            <Text className="text-[10px] uppercase tracking-label-lg text-tertiary-500 mb-2">
              Curation
            </Text>
            <Text className="text-3xl font-playfair text-brand-primary">
              More from {listing.curatedBy}
            </Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 8 }}
          >
            {listing.relatedListings.map((related) => (
              <TouchableOpacity
                key={related.id}
                onPress={() => onRelatedListingPress?.(related.id)}
                className="w-[280px] mr-8"
              >
                <View className="aspect-[3/4] border border-border mb-4">
                  <Image
                    source={related.image}
                    style={{ width: "100%", height: "100%" }}
                    contentFit="cover"
                  />
                </View>
                <Text className="text-[10px] uppercase tracking-label-md text-tertiary-500 mb-1">
                  {related.brand}
                </Text>
                <Text className="text-lg font-playfair text-brand-primary uppercase mb-2">
                  {related.title}
                </Text>
                <Text className="text-sm">{related.price}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </ScrollView>
  );
};
