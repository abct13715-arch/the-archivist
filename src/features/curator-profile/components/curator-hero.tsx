import {Image} from 'expo-image';
import {Dimensions, ImageSourcePropType} from 'react-native';

const {width} = Dimensions.get('window');

type CuratorHeroProps = {
  portrait: ImageSourcePropType;
};

export const CuratorHero = ({portrait}: CuratorHeroProps) => {
  return (
    <Image
      source={portrait}
      contentFit="cover"
      style={{
        width: width,
        height: 530,
      }}
      className="contrast-125 grayscale"
    />
  );
};
