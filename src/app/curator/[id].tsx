import { useLocalSearchParams } from "expo-router";
import { useCuratorProfile, CuratorProfile } from "@/features/curator-profile";

export default function CuratorPage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const curator = useCuratorProfile(id);

  if (!curator) {
    return null;
  }

  return <CuratorProfile curator={curator} />;
}
