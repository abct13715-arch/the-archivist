import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useRouter } from "expo-router";
import React, { forwardRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { BottomSheetComponent } from "@/components/ui/bottom-sheet";
import { Colors } from "@/constants/theme";

interface LoginBottomSheetRef {
  present: () => void;
  dismiss: () => void;
}

interface LoginBottomSheetProps {
  onClose?: () => void;
}

export const LoginBottomSheet = forwardRef<
  LoginBottomSheetRef,
  LoginBottomSheetProps
>(({ onClose }, ref) => {
  const router = useRouter();
  const internalRef = React.useRef<BottomSheetModal>(null);

  React.useImperativeHandle(ref, () => ({
    present: () => internalRef.current?.present(),
    dismiss: () => internalRef.current?.dismiss(),
  }));

  const handleCreateAccount = () => {
    internalRef.current?.dismiss();
    router.push("/(auth)/register");
  };

  const handleLogin = () => {
    internalRef.current?.dismiss();
    router.push("/(auth)/login");
  };

  const handleClose = () => {
    onClose?.();
    internalRef.current?.dismiss();
  };

  return (
    <BottomSheetComponent
      ref={internalRef}
      snapPoints={["65%"]}
      useScroll={false}
    >
      <View style={{ flex: 1, position: "relative" }}>
        {/* Close Button */}
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 8,
            right: 16,
            zIndex: 10,
            padding: 8,
          }}
          onPress={handleClose}
          activeOpacity={0.7}
        >
          <Text
            style={{
              fontSize: 24,
              color: Colors.brand.tertiary,
              lineHeight: 24,
            }}
          >
            ✕
          </Text>
        </TouchableOpacity>

        {/* Content */}
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            paddingHorizontal: 24,
            paddingTop: 48,
            paddingBottom: 32,
          }}
        >
          {/* Title */}
          <Text
            style={{
              fontFamily: "PlayfairDisplay_700Bold",
              fontSize: 36,
              fontWeight: "700",
              color: Colors.brand.primary,
              letterSpacing: -2,
              lineHeight: 40,
              marginBottom: 24,
            }}
          >
            Join the Archivist
          </Text>

          {/* Body Text */}
          <Text
            style={{
              fontSize: 16,
              color: Colors.brand.tertiary,
              lineHeight: 28,
              marginBottom: 40,
              maxWidth: 320,
            }}
          >
            Access to private listings, provenance reports, and the ability to
            curate your own archive requires membership.
          </Text>

          {/* CTAs */}
          <View style={{ gap: 16 }}>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.brand.secondary,
                paddingVertical: 20,
                paddingHorizontal: 32,
                alignItems: "center",
              }}
              onPress={handleCreateAccount}
              activeOpacity={0.85}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 11,
                  fontWeight: "700",
                  letterSpacing: 4,
                }}
              >
                CREATE ACCOUNT
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: Colors.brand.primary,
                backgroundColor: "transparent",
                paddingVertical: 20,
                paddingHorizontal: 32,
                alignItems: "center",
              }}
              onPress={handleLogin}
              activeOpacity={0.85}
            >
              <Text
                style={{
                  color: Colors.brand.primary,
                  fontSize: 11,
                  fontWeight: "700",
                  letterSpacing: 4,
                }}
              >
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </BottomSheetComponent>
  );
});

LoginBottomSheet.displayName = "LoginBottomSheet";
