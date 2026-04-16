import {Text, TouchableOpacity, View} from 'react-native';

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
    <View className="mt-4 flex-row gap-3">
      {canGoPrev && (
        <TouchableOpacity
          onPress={onPrev}
          disabled={!canGoPrev}
          className="h-10 w-10 items-center justify-center border border-primary-900"
        >
          <Text
            className={`text-base ${canGoPrev ? 'text-primary-900' : 'text-tertiary-300'}`}
          >
            ←
          </Text>
        </TouchableOpacity>
      )}
      {canGoNext && (
        <TouchableOpacity
          onPress={onNext}
          disabled={!canGoNext}
          className="h-10 w-10 items-center justify-center border border-primary-900"
        >
          <Text
            className={`text-base ${canGoNext ? 'text-primary-900' : 'text-tertiary-300'}`}
          >
            →
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
