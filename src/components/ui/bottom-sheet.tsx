import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Modal,
  TouchableOpacity,
  View,
} from "react-native";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

interface BottomSheetProps {
  visible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export const BottomSheet = ({
  visible,
  onClose,
  children,
}: BottomSheetProps) => {
  const translateY = useRef(new Animated.Value(SCREEN_HEIGHT)).current;

  useEffect(() => {
    if (visible) {
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
        damping: 20,
        stiffness: 90,
      }).start();
    } else {
      Animated.timing(translateY, {
        toValue: SCREEN_HEIGHT,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, translateY]);

  return (
    <Modal visible={visible} transparent animationType="none">
      <View className="flex-1 justify-end">
        <TouchableOpacity
          activeOpacity={1}
          className="absolute inset-0 bg-black/50"
          onPress={onClose}
        />
        <Animated.View
          style={[
            { transform: [{ translateY }] },
            { height: SCREEN_HEIGHT * 0.9 },
          ]}
          className="bg-[#F5F2EC] rounded-t-[32px] overflow-hidden"
        >
          {/* Handle Bar Area */}
          <View className="items-center py-4 bg-[#F5F2EC]">
            <View className="w-12 h-[3px] bg-neutral-300 rounded-full" />
          </View>

          <View className="flex-1 bg-white">{children}</View>
        </Animated.View>
      </View>
    </Modal>
  );
};
