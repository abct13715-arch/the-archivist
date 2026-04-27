import { images } from '@/assets';
import { Colors } from '@/constants/theme';
import { useAuth } from '@/contexts/auth-context';
import { GuestDrawerFooter } from '@/features/auth/components/guest-drawer-footer';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useCallback } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

const ARCHIVIST_LINKS = [
  {
    label: 'MY LISTINGS',
    href: '/profile',
    icon: 'list' as const,
  },
  {
    label: 'CREATE LISTING',
    href: '/listing/create',
    icon: 'add' as const,
  },
  {
    label: 'BECOME AN ARCHIVIST',
    href: '/become-archivist',
    icon: 'shield-checkmark' as const,
  },
];

const CATEGORIES = [
  {label: 'ART', href: '/browse?category=art'},
  {label: 'COLLECTIBLES', href: '/browse?category=collectibles'},
  {label: 'DECOR', href: '/browse?category=decor'},
  {label: 'FASHION', href: '/browse?category=fashion'},
  {label: 'JEWELRY', href: '/browse?category=jewelry'},
  {label: 'PHOTOGRAPHY', href: '/browse?category=photography'},
  {label: 'PRINTS', href: '/browse?category=prints'},
  {label: 'SCULPTURE', href: '/browse?category=sculpture'},
];

const mockUser = {
  name: 'Julian Vane',
  role: 'Curator',
  avatar: images.profileFace,
};

export const Drawer = () => {
  const {user, isGuest, signOut} = useAuth();
  const isLoggedIn = user && !isGuest;

  const handleNav = useCallback((href: string) => {
    router.push(href as any);
  }, []);

  return (
    <View className="flex-1 bg-neutral-100">
      <View className="w-full flex-row items-center justify-between border-b border-tertiary-100 px-4 pb-4 pt-16">
        <Text className="font-playfair text-2xl text-primary-900">
          THE ARCHIVIST
        </Text>

        <TouchableOpacity
          onPress={() => router.back()}
          hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
        >
          <Ionicons name="close" size={30} color={Colors.light.text} />
        </TouchableOpacity>
      </View>

      <View className="flex-1">
        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <View className="mt-6">
            {ARCHIVIST_LINKS.map((link, index) => (
              <TouchableOpacity
                key={link.label}
                onPress={() => handleNav(link.href)}
                className="flex-row items-center justify-between border-b border-tertiary-100 px-6 py-5"
              >
                <View className="flex-row items-center gap-5">
                  <View className="h-10 w-10 items-center justify-center bg-brand-secondary">
                    <Ionicons name={link.icon} size={20} color="#FFFFFF" />
                  </View>
                  <Text className="text-sm font-bold tracking-label-lg text-primary-900">
                    {link.label}
                  </Text>
                </View>
                <Ionicons
                  name="arrow-forward"
                  size={18}
                  color={Colors.palette.primary300}
                />
              </TouchableOpacity>
            ))}
          </View>

          <View className="mt-8 px-6 pb-6">
            <View className="mb-6 flex-row items-center gap-3">
              <Text className="text-xs font-bold tracking-label-lg text-tertiary-500">
                CATEGORIES
              </Text>
              <View className="h-px flex-1 bg-tertiary-100" />
            </View>

            <View className="flex-row flex-wrap gap-y-5">
              {CATEGORIES.map(cat => (
                <TouchableOpacity
                  key={cat.label}
                  onPress={() => handleNav(cat.href)}
                  className="w-1/2"
                >
                  <Text className="text-xs tracking-label-lg text-primary-900">
                    {cat.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>

        {!isLoggedIn && (
          <View className="absolute inset-0 z-50" pointerEvents="auto">
            <BlurView intensity={10} tint="light" className="flex-1" />
          </View>
        )}
      </View>

      {/* footer */}
      {isLoggedIn ? (
        <View className="flex-row items-center justify-between border-t border-tertiary-100 px-6 py-4">
          <View className="flex-row items-center gap-4">
            <Image
              source={mockUser.avatar}
              style={{width: 64, height: 64}}
              contentFit="cover"
            />
            <View className="gap-1">
              <Text className="font-playfair text-xl text-primary-900">
                {user?.user_metadata?.full_name || mockUser.name}
              </Text>
              <View className="flex-row items-center gap-2">
                <Text className="text-xs font-bold tracking-label-lg text-brand-secondary">
                  {mockUser.role.toUpperCase()}
                </Text>
              </View>
            </View>
          </View>

          <View className="flex-row gap-3">
            <TouchableOpacity
              onPress={() => handleNav('/settings')}
              className="h-12 w-12 items-center justify-center border border-tertiary-100"
            >
              <Ionicons
                name="settings-outline"
                size={22}
                color={Colors.light.text}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={async () => {
                await signOut();
                router.replace('/(auth)/onboarding');
              }}
              className="h-12 w-12 items-center justify-center border border-tertiary-100"
            >
              <Ionicons
                name="log-out-outline"
                size={22}
                color={Colors.light.text}
              />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <GuestDrawerFooter />
      )}
    </View>
  );
};
