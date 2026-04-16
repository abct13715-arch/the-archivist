import {ImageSourcePropType} from 'react-native';

export type TSavedListing = {
  id: string;
  image: ImageSourcePropType;
  title: string;
  studio: string;
  price: string;
  aspectRatio?: 'tall' | 'square' | 'standard';
};

export type TSavedCollection = {
  id: string;
  image: ImageSourcePropType;
  title: string;
  curator: string;
  itemCount: number;
};

export const savedListings: TSavedListing[] = [
  {
    id: '1',
    image: require('@/assets/images/bottle-1.png'),
    title: 'AMBER VESSEL NO. 04',
    studio: 'STUDIO LITHIC',
    price: '$420.00',
    aspectRatio: 'tall',
  },
  {
    id: '2',
    image: require('@/assets/images/chair-2.png'),
    title: 'ARC CHAIR',
    studio: 'MEYERS DESIGN',
    price: '$1,850.00',
    aspectRatio: 'square',
  },
  {
    id: '3',
    image: require('@/assets/images/light.png'),
    title: 'BRONZE MONOLITH',
    studio: 'OVO LIGHTING',
    price: '$890.00',
    aspectRatio: 'standard',
  },
  {
    id: '4',
    image: require('@/assets/images/bowl.png'),
    title: 'RAW BASIN',
    studio: 'CERA ATELIER',
    price: '$215.00',
    aspectRatio: 'tall',
  },
  {
    id: '5',
    image: require('@/assets/images/clock.png'),
    title: 'TEMPORAL STUDY',
    studio: 'HAUS OBJECTS',
    price: '$450.00',
    aspectRatio: 'square',
  },
  {
    id: '6',
    image: require('@/assets/images/table-lamp.png'),
    title: 'LUMINOUS FORM',
    studio: 'STUDIO LITHIC',
    price: '$315.00',
    aspectRatio: 'standard',
  },
];

export const savedCollections: TSavedCollection[] = [
  {
    id: '1',
    image: require('@/assets/images/series-1.png'),
    title: 'BRUTALIST ESSENTIALS',
    curator: 'THE ARCHIVIST',
    itemCount: 12,
  },
  {
    id: '2',
    image: require('@/assets/images/series-2.png'),
    title: 'NORDIC CRAFT',
    curator: 'MEYERS DESIGN',
    itemCount: 8,
  },
  {
    id: '3',
    image: require('@/assets/images/series-3.png'),
    title: 'LUMINOUS OBJECTS',
    curator: 'OVO LIGHTING',
    itemCount: 6,
  },
];
