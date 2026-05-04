import React, {forwardRef, useEffect, useRef} from 'react';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {
  Animated,
  Dimensions,
  Modal,
  TouchableOpacity,
  View,
} from 'react-native';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

interface BottomSheetProps {
  visible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export const BottomSheet = ({visible, onClose, children}: BottomSheetProps) => {
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
          style={[{transform: [{translateY}]}, {height: SCREEN_HEIGHT * 0.9}]}
          className="overflow-hidden rounded-t-[32px] bg-[#F5F2EC]"
        >
          {/* Handle Bar Area */}
          <View className="items-center bg-[#F5F2EC] py-4">
            <View className="h-[3px] w-12 rounded-full bg-neutral-300" />
          </View>

          <View className="flex-1 bg-white">{children}</View>
        </Animated.View>
      </View>
    </Modal>
  );
};

interface BottomSheetComponentProps {
  children: React.ReactNode;
  snapPoints?: (string | number)[];
  useScroll?: boolean;
}

export const BottomSheetComponent = forwardRef<
  BottomSheetModal,
  BottomSheetComponentProps
>(({children, snapPoints = ['50%'], useScroll = false}, reference) => {
  const renderBackdrop = React.useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        opacity={0.5}
      />
    ),
    [],
  );

  return (
    <BottomSheetModal
      ref={reference}
      index={0}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      enablePanDownToClose
      backgroundStyle={{backgroundColor: '#F5F2EC', borderRadius: 32}}
      handleIndicatorStyle={{backgroundColor: '#D1D5DB', width: 48}}
    >
      {useScroll ? (
        <BottomSheetScrollView className="flex-1">
          <View className="p-6">{children}</View>
        </BottomSheetScrollView>
      ) : (
        <BottomSheetView className="flex-1 px-6 py-4">
          {children}
        </BottomSheetView>
      )}
    </BottomSheetModal>
  );
});

BottomSheetComponent.displayName = 'BottomSheetComponent';
