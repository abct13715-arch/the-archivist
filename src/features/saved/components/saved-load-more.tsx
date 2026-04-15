import { Text, TouchableOpacity, View } from "react-native";

type Props = {
  shownCount?: number;
  totalCount?: number;
  onLoadMore?: () => void;
};

export const SavedLoadMore = ({
  shownCount = 4,
  totalCount = 28,
  onLoadMore,
}: Props) => {
  return (
    <View className="my-12 flex-col items-center border-t border-neutral-300 pt-12">
      <Text className="text-[10px] font-bold tracking-widest text-tertiary-500 uppercase mb-6">
        {shownCount} OF {totalCount} ITEMS SHOWN
      </Text>
      <TouchableOpacity
        onPress={onLoadMore}
        className="bg-secondary-500 px-12 py-4"
      >
        <Text className="text-[11px] font-bold tracking-[0.2em] text-white uppercase">
          LOAD MORE ARCHIVE
        </Text>
      </TouchableOpacity>
    </View>
  );
};
