import {useAuth} from '@/contexts/auth-context';
import {GuestProfile, Profile} from '@/features';

export default function ProfileScreen() {
  const {user, isGuest, isLoading} = useAuth();

  if (isLoading) {
    return null; // Or a loading spinner
  }

  if (user && !isGuest) {
    return <Profile />;
  }

  return <GuestProfile />;
}
