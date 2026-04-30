import {images} from '@/assets/images';
import {TListing, TReview} from '@/types';

export const listings: TListing[] = [
  {
    id: '1',
    image: images.chair2,
    title: '1954 Wegner Lounge Chair',
    category: 'FURNITURE • DENMARK',
    price: '€4,200',
    badge: 'AVAILABLE',
  },
  {
    id: '2',
    image: images.light,
    title: 'Brutalist Concrete Lamp',
    category: 'LIGHTING • GERMANY',
    price: '€850',
  },
  {
    id: '3',
    image: images.camera,
    title: 'Leica M3 Single Stroke',
    category: 'OPTICS • WETZLAR',
    price: '€2,800',
  },
  {
    id: '4',
    image: images.folio,
    title: 'Le Corbusier 1923 Folio',
    category: 'ARCHIVE • FRANCE',
    price: '€1,100',
    badge: 'RESERVED',
  },
];

export const reviews: TReview[] = [
  {
    id: '1',
    name: 'Sophie M.',
    text: 'Exceptional curation. Every piece arrived exactly as described.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Thomas R.',
    text: 'The Wegner chair was in perfect condition. Packaging was museum quality.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Clara B.',
    text: "Purchased the Leica. A genuine collector's piece. Would buy again.",
    rating: 4,
  },
];

export const tabs = ['LISTINGS', 'REVIEWS', 'ABOUT'];
export const filters = ['ALL ITEMS', 'FURNITURE', 'LIGHTING', 'RARE BOOKS'];
