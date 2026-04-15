import { GuestProfile, Profile } from "@/features";
import { useAuth } from "@/hooks/use-auth";
import { View } from "react-native";

export default function ProfileScreen() {
  const { user, isGuest, loading } = useAuth();

  if (loading) return <View></View>;

  // Guest or not logged in → show guest profile
  if (!user || isGuest) {
    return <GuestProfile />;
  }

  // Logged in user → existing Profile
  return <Profile />;
}
