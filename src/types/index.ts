import {ImageSourcePropType} from 'react-native';

export type TListing = {
  id: string;
  image: ImageSourcePropType;
  title: string;
  category: string;
  price: string;
  badge?: 'AVAILABLE' | 'RESERVED';
};

export type TReview = {
  id: string;
  name: string;
  text: string;
  rating: number;
};

export type TFeaturedCollection = {
  id: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
  imageCaption: string;
  volume: string;
};

export type TCollectionItem = {
  id: string;
  name: string;
  image: ImageSourcePropType;
  category: string;
  price: string;
};

export type TCollectionDetail = {
  id: string;
  title: string;
  collectionNumber: string;
  badge: string;
  heroImage: ImageSourcePropType;
  quote: string;
  quoteAuthor: string;
  intentTitle: string;
  intentDescription: string[];
  items: TCollectionItem[];
};

export type TCollectionCard = {
  id: string;
  seriesNumber: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
};

export type TCollection = {
  collections: TCollectionCard[];
};
