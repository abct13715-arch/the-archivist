import React, {forwardRef} from 'react';
import {FontAwesome5, MaterialIcons} from '@expo/vector-icons';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {Text, TouchableOpacity, View} from 'react-native';

import {BottomSheetComponent} from '../../../components/ui/bottom-sheet';
import {useProfile} from '../hooks';

interface ProfileBottomSheetProps {
  onLogout: () => void;
}

export const ProfileBottomSheet = forwardRef<
  BottomSheetModal,
  ProfileBottomSheetProps
>(({onLogout}, reference) => {
  const {data: currentUser} = useProfile();
  return (
    <BottomSheetComponent
      ref={reference}
      snapPoints={['35%']}
      useScroll={false}
    >
      <View className="flex-1 items-center gap-6">
        <View className="flex-row items-center justify-center gap-2">
          <FontAwesome5 name="user-circle" size={24} color="#333333" />
          <Text className="text-primary-lightGray text-lg">Profile</Text>
        </View>

        <View className="w-full">
          <Text className="mb-1 text-sm font-medium text-gray-500">
            Logged in as
          </Text>
          <View className="flex-row items-center gap-3 rounded-2xl border border-[#DEDEDE] bg-[#F9FAFB] p-4">
            <View className="h-10 w-10 items-center justify-center rounded-full bg-primary-100">
              <Text className="text-primary-600 font-bold">
                {currentUser?.FullName?.[0] ?? ''}
              </Text>
            </View>
            <Text
              className="text-primary-lightGray flex-1 text-lg"
              numberOfLines={1}
            >
              {currentUser?.FullName ?? ''}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={onLogout}
          activeOpacity={0.7}
          className="w-full flex-row items-center justify-center gap-2 rounded-3xl border border-[#DEDEDE] bg-[#F9FAFB] py-4 shadow-black/5"
        >
          <MaterialIcons name="logout" size={24} color="#333333" />
          <Text className="text-primary-lightGray text-lg font-medium">
            Log out
          </Text>
        </TouchableOpacity>
      </View>
    </BottomSheetComponent>
  );
});
ProfileBottomSheet.displayName = 'ProfileBottomSheet';
