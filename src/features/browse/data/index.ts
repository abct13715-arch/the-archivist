import {images} from '@/assets/images';
import {ImageSourcePropType} from 'react-native';

export type TBrowseCollection = {
  id: string;
  image: ImageSourcePropType;
  series: string;
  title: string;
};

export type TBrowseListing = {
  id: string;
  image: ImageSourcePropType;
  title: string;
  price: string;
  isAsymmetric?: boolean;
};

export const browseCollections: TBrowseCollection[] = [
  {
    id: '1',
    image: images.series1,
    series: 'SERIES 01',
    title: 'The Brutalist Series',
  },
  {
    id: '2',
    image: images.series2,
    series: 'SERIES 02',
    title: 'Nordic Woodcraft',
  },
  {
    id: '3',
    image: images.series3,
    series: 'SERIES 03',
    title: 'Luminous Objects',
  },
];

export const browseListings: TBrowseListing[] = [
  {
    id: '1',
    image: images.bottle1,
    title: 'Earthen Vessel No. 04',
    price: '$420.00',
  },
  {
    id: '2',
    image: images.chair2,
    title: 'The Artek Lounge',
    price: '$1,850.00',
  },
  {
    id: '3',
    image: images.light,
    title: 'Brushed Brass Task Lamp',
    price: '$315.00',
  },
  {
    id: '4',
    image: images.folio,
    title: 'Linear Study 09',
    price: '$580.00',
  },
  {
    id: '5',
    image: images.bowl,
    title: 'Hand-Turned Oak Bowl',
    price: '$210.00',
  },
  {
    id: '6',
    image: images.clock,
    title: 'Minimalist Wall Clock',
    price: '$450.00',
  },
];

export const categories = [
  'FURNITURE',
  'LIGHTING',
  'TEXTILES',
  'CERAMICS',
  'OBJECTS',
  'ARCHIVE',
];
