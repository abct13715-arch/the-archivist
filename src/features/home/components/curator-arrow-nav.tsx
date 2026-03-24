import { Text, TouchableOpacity, View } from "react-native";

type CuratorArrowNavProps = {
  onPrev: () => void;
  onNext: () => void;
  canGoPrev: boolean;
  canGoNext: boolean;
};

export const CuratorArrowNav = ({
  onPrev,
  onNext,
  canGoPrev,
  canGoNext,
}: CuratorArrowNavProps) => {
  return (
    <View className="flex-row gap-3 mt-4">
      {canGoPrev && (
        <TouchableOpacity
          onPress={onPrev}
          disabled={!canGoPrev}
          className="border border-primary-900 w-10 h-10 items-center justify-center"
        >
          <Text
            className={`text-base ${canGoPrev ? "text-primary-900" : "text-tertiary-300"}`}
          >
            ←
          </Text>
        </TouchableOpacity>
      )}
      {canGoNext && (
        <TouchableOpacity
          onPress={onNext}
          disabled={!canGoNext}
          className="border border-primary-900 w-10 h-10 items-center justify-center"
        >
          <Text
            className={`text-base ${canGoNext ? "text-primary-900" : "text-tertiary-300"}`}
          >
            →
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
