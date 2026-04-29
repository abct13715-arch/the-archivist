import {useState} from 'react';
import {images} from '@/assets';
import {Colors} from '@/constants/theme';
import {useAuth} from '@/contexts/auth-context';
import {Ionicons} from '@expo/vector-icons';
import {Image} from 'expo-image';
import {router} from 'expo-router';
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const mockUser = {
  name: 'Julian Vane-Tempest',
  email: 'j.vane@archivist-collective.com',
  role: 'Founding Member',
  avatar: images.profileFace,
};

export default function SettingsScreen() {
  const {user, deleteAccount} = useAuth();
  const insets = useSafeAreaInsets();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteAccount = () => {
    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account? This action is irreversible and all your data will be permanently removed.',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            setIsDeleting(true);
            try {
              const {error} = await deleteAccount();
              if (error) {
                Alert.alert('Error', error.message);
              } else {
                router.replace('/(auth)/onboarding');
              }
            } catch {
              Alert.alert('Error', 'An unexpected error occurred.');
            } finally {
              setIsDeleting(false);
            }
          },
        },
      ],
    );
  };

  return (
    <View className="flex-1 bg-neutral-100">
      {/* Navbar - Matching Drawer Style */}
      <View
        style={{paddingTop: insets.top}}
        className="w-full flex-row items-center justify-between border-b border-tertiary-100 px-4 pb-4"
      >
        <Text className="font-playfair text-2xl text-primary-900">
          THE ARCHIVIST
        </Text>

        <TouchableOpacity
          onPress={() => router.back()}
          hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
          disabled={isDeleting}
        >
          <Ionicons name="close" size={30} color={Colors.light.text} />
        </TouchableOpacity>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{paddingBottom: insets.bottom + 40}}
        showsVerticalScrollIndicator={false}
      >
        {/* ACCOUNT SECTION */}
        <View className="px-6 pt-12">
          <View className="mb-8 flex-col gap-6 border-b-2 border-primary-900 pb-4 md:flex-row md:items-end md:justify-between">
            <View>
              <Text className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-tertiary-500">
                PERSONAL ARCHIVES
              </Text>
              <Text className="font-playfair text-5xl italic tracking-tighter text-primary-900">
                Account
              </Text>
            </View>

            <TouchableOpacity
              className="bg-primary-900 px-8 py-3 active:opacity-90"
              style={{borderRadius: 0}}
              disabled={isDeleting}
            >
              <Text className="text-xs font-bold uppercase tracking-widest text-white">
                EDIT PROFILE
              </Text>
            </TouchableOpacity>
          </View>

          <View className="flex-col gap-8 md:flex-row">
            {/* Avatar */}
            <View className="aspect-square w-full border border-tertiary-100 bg-neutral-200 md:w-1/3">
              <Image
                source={mockUser.avatar}
                className="h-full w-full"
                contentFit="cover"
                style={{filter: 'grayscale(100%) contrast(125%)'} as any}
              />
            </View>

            {/* Info Fields */}
            <View className="flex-1 gap-6">
              <View className="border-b border-tertiary-100 pb-4">
                <Text className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-tertiary-500">
                  ARCHIVIST NAME
                </Text>
                <Text className="font-playfair text-2xl text-primary-900">
                  {user?.user_metadata?.full_name || mockUser.name}
                </Text>
              </View>

              <View className="border-b border-tertiary-100 pb-4">
                <Text className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-tertiary-500">
                  EMAIL IDENTIFIER
                </Text>
                <Text className="text-lg text-primary-900">
                  {user?.email || mockUser.email}
                </Text>
              </View>

              <View className="border-b border-tertiary-100 pb-4">
                <Text className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-tertiary-500">
                  CURATION STATUS
                </Text>
                <View className="flex-row items-center gap-2">
                  <View className="h-2 w-2 rounded-full bg-secondary-500" />
                  <Text className="text-lg text-primary-900">
                    {mockUser.role}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* DANGER ZONE */}
        <View className="mt-20 border-t border-tertiary-100 px-6 pt-16">
          <View className="max-w-2xl">
            <Text className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-secondary-500">
              ACCOUNT MANAGEMENT
            </Text>
            <Text className="mb-8 text-sm leading-relaxed text-tertiary-500">
              Closing your account will permanently remove your archived history
              and all curated selections. This action is irreversible and final.
            </Text>

            <TouchableOpacity
              className="flex-row items-center gap-2 active:opacity-70"
              onPress={handleDeleteAccount}
              disabled={isDeleting}
            >
              {isDeleting ? (
                <ActivityIndicator
                  size="small"
                  color={Colors.palette.secondary500}
                />
              ) : (
                <>
                  <Text className="border-b border-transparent text-xs font-bold uppercase tracking-widest text-tertiary-500">
                    DELETE ACCOUNT
                  </Text>
                  <Ionicons
                    name="trash-outline"
                    size={16}
                    color={Colors.palette.tertiary500}
                  />
                </>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
