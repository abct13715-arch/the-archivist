import { BottomSheet } from "@/components/ui/bottom-sheet";
import React from "react";
import { View } from "react-native";

interface FilterBottomSheetProps {
  visible: boolean;
  onClose: () => void;
}

export const FilterBottomSheet = ({
  visible,
  onClose,
}: FilterBottomSheetProps) => {
  return (
    <BottomSheet visible={visible} onClose={onClose}>
      <View className="flex-1 bg-white" />
    </BottomSheet>
  );
};
