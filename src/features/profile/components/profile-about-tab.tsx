import {Colors} from '@/constants/theme';
import {Text, View} from 'react-native';

export const ProfileAboutTab = ({about}: {about: string}) => (
  <View
    style={{borderLeftColor: Colors.brand.secondary, borderLeftWidth: 2}}
    className="mx-4 mt-4 py-2 pl-4"
  >
    <Text style={{color: Colors.light.text}} className="text-base leading-7">
      {about}
    </Text>
  </View>
);
