import {useRef} from 'react';
import {Navbar} from '@/components';
import {Colors} from '@/constants/theme';
import {isHorizontalScrollingRef} from '@/contexts/horizontal-scroll-context';
import {router, Tabs} from 'expo-router';
import {PanResponder, View} from 'react-native';

import {useAuth} from '@/hooks/use-auth';
import {IconSymbol} from '@/components/ui/icon-symbol';
import {HapticTab} from '@/components/haptic-tab';

function TabLayoutContent() {
  const {user, isGuest} = useAuth();
  const isLoggedIn = user && !isGuest;

  const swipeResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onStartShouldSetPanResponderCapture: () => false,
      onMoveShouldSetPanResponder: (_, g) =>
        !isHorizontalScrollingRef.current &&
        Math.abs(g.dx) > Math.abs(g.dy) &&
        g.dx < -20,
      onMoveShouldSetPanResponderCapture: (_, g) =>
        !isHorizontalScrollingRef.current &&
        Math.abs(g.dx) > Math.abs(g.dy) &&
        g.dx < -20,

      onPanResponderRelease: (_, g) => {
        if (!isHorizontalScrollingRef.current && g.dx < -60) {
          router.push('/drawer');
        }
      },
    }),
  ).current;
  return (
    <View className="flex-1" {...swipeResponder.panHandlers}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors.light.text,
          tabBarInactiveTintColor: Colors.light.textSecondary,
          headerShown: true,
          tabBarButton: HapticTab,
          header: ({route}) => <Navbar routeName={route?.name} />,
          tabBarStyle: {
            backgroundColor: Colors.brand.neutral,
            borderTopColor: Colors.light.border,
            borderTopWidth: 0.5,
            height: 70,
            paddingBottom: 12,
            paddingTop: 10,
          },
          tabBarLabelStyle: {
            letterSpacing: 2,
            fontSize: 10,
            fontWeight: '600',
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({color}) => (
              <IconSymbol size={28} name="house.fill" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="browse"
          options={{
            title: 'Browse',
            tabBarIcon: ({color}) => (
              <IconSymbol size={28} name="square.grid.2x2.fill" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="saved"
          options={{
            title: 'Saved',
            tabBarIcon: ({color}) => (
              <IconSymbol size={28} name="bookmark.fill" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: isLoggedIn ? 'Profile' : 'Login',
            tabBarIcon: ({color}) => (
              <IconSymbol
                size={28}
                name={isLoggedIn ? 'person.fill' : 'arrow.right.circle.fill'}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}

export default TabLayoutContent;
