import {CuratorProfile, useCuratorProfile} from '@/features/curator-profile';
import {useLocalSearchParams} from 'expo-router';

export default function CuratorPage() {
  const {id} = useLocalSearchParams<{id: string}>();
  const curator = useCuratorProfile(id);

  if (!curator) {
    return null;
  }

  return <CuratorProfile curator={curator} />;
}
