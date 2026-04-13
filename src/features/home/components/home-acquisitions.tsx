import { Image } from "expo-image";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { useAcquisitions } from "../data";

export const HomeAcquisitions = () => {
  const { acquisitions } = useAcquisitions();

  const handleProductPress = (index: number) => {
    const productId = (index + 1).toString();
    router.push(`/product-detail/${productId}`);
  };

  return (
    <View className="py-8">
      <View className="h-px bg-tertiary-100 w-2/3 mb-4 mx-auto" />

      <View className="py-14">
        <View className="px-6 pb-4 flex-row justify-between items-start mx-4 mb-0">
          <Text className="text-xs tracking-label-lg text-primary-900 font-bold w-1/2">
            SHOP THE CONVERSATION
          </Text>
          <TouchableOpacity
            onPress={() => router.push("/browse")}
            className="w-1/2 items-end"
          >
            <Text className="text-xs tracking-label-md text-brand-secondary font-bold text-right">
              VIEW FULL DIALOGUE GALLERY
            </Text>
          </TouchableOpacity>
        </View>

        <View className="mx-4 border border-tertiary-100">
          <View className="flex-row">
            <TouchableOpacity
              onPress={() => handleProductPress(0)}
              className="w-1/2 p-4 border-r border-b border-tertiary-100"
            >
              <Image
                source={acquisitions[0].image}
                style={{ width: "100%", aspectRatio: 1 }}
                contentFit="cover"
              />
              <View className="pt-3 gap-1">
                <Text className="text-xs tracking-label-lg text-brand-secondary font-bold">
                  {acquisitions[0].category}
                </Text>
                <Text className="font-playfair text-lg text-primary-900 leading-tight">
                  {acquisitions[0].name}
                </Text>
                <Text className="text-sm text-primary-900">
                  {acquisitions[0].price}
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleProductPress(1)}
              className="w-1/2 p-4 border-b border-tertiary-100"
            >
              <Image
                source={acquisitions[1].image}
                style={{ width: "100%", aspectRatio: 1 }}
                contentFit="cover"
              />
              <View className="pt-3 gap-1">
                <Text className="text-xs tracking-label-lg text-brand-secondary font-bold">
                  {acquisitions[1].category}
                </Text>
                <Text className="font-playfair text-lg text-primary-900 leading-tight">
                  {acquisitions[1].name}
                </Text>
                <Text className="text-sm text-primary-900">
                  {acquisitions[1].price}
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View className="flex-row">
            <TouchableOpacity
              onPress={() => handleProductPress(2)}
              className="w-1/2 p-4 border-r border-tertiary-100"
            >
              <Image
                source={acquisitions[2].image}
                style={{ width: "100%", aspectRatio: 1 }}
                contentFit="cover"
              />
              <View className="pt-3 gap-1">
                <Text className="text-xs tracking-label-lg text-brand-secondary font-bold">
                  {acquisitions[2].category}
                </Text>
                <Text className="font-playfair text-lg text-primary-900 leading-tight">
                  {acquisitions[2].name}
                </Text>
                <Text className="text-sm text-primary-900">
                  {acquisitions[2].price}
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleProductPress(3)}
              className="w-1/2 p-4"
            >
              <Image
                source={acquisitions[3].image}
                style={{ width: "100%", aspectRatio: 1 }}
                contentFit="cover"
              />
              <View className="pt-3 gap-1">
                <Text className="text-xs tracking-label-lg text-brand-secondary font-bold">
                  {acquisitions[3].category}
                </Text>
                <Text className="font-playfair text-lg text-primary-900 leading-tight">
                  {acquisitions[3].name}
                </Text>
                <Text className="text-sm text-primary-900">
                  {acquisitions[3].price}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="h-px bg-tertiary-100 w-2/3 mb-4 mx-auto" />
    </View>
  );
};
