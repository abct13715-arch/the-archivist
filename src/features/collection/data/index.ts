import {images} from '@/assets';
import {TCollection, TCollectionDetail} from '@/types';

export const useCollectionDetail = (id: string): TCollectionDetail => {
  return {
    id,
    title: 'The Brutalist Series',
    collectionNumber: 'OAK',
    badge: 'LIMITED EDITION RELEASE',
    heroImage: images.collectionBanner,
    quote:
      'Honesty in material is the ultimate luxury. We strip away the ornament to reveal the soul of the structure.',
    quoteAuthor: '— LEAD ARCHIVIST',
    intentTitle: 'THE AESTHETIC INTENT',
    intentDescription: [
      'The Brutalist Series is a curated exploration of raw textures and uncompromising geometry. Inspired by the architectural movement of the 1950s, each piece in this collection celebrates the weight of concrete, the cold precision of steel, and the warmth of seasoned oak.',
      "This is a rejection of the ephemeral. We focus on permanence — objects that command a room through silence rather than noise. Every edge is deliberate; every surface is a testament to the artisan's hand meeting industrial philosophy.",
    ],
    items: [
      {
        id: '1',
        name: 'Raw Plinth Stool',
        image: images.rawPlinthStool,
        category: 'FURNITURE / OAK',
        price: '$1,240',
      },
      {
        id: '2',
        name: 'Foundry Table Lamp',
        image: images.foundryTableLamp,
        category: 'LIGHTING / OAK',
        price: '$890',
      },
      {
        id: '3',
        name: 'Monolith Wall Clock',
        image: images.monolithWallClock,
        category: 'OBJECT / VINTAGE',
        price: '$450',
      },
      {
        id: '4',
        name: 'Shetland Wool Throw',
        image: images.shetlandWoolThrow,
        category: 'TEXTILE / OAK',
        price: '$320',
      },
    ],
  };
};

export const useCollection = (): TCollection => {
  return {
    collections: [
      {
        id: 'brutalist-series',
        seriesNumber: '01',
        title: 'The Brutalist Series',
        description:
          'Exploring the raw, unadorned beauty of concrete monoliths and structural honesty.',
        image: images.series1,
      },
      {
        id: 'mid-century-modern',
        seriesNumber: '02',
        title: 'Mid-Century Modern',
        description:
          'The golden era of organic curves and functional elegance.',
        image: images.series2,
      },
      {
        id: 'japanese-minimalism',
        seriesNumber: '03',
        title: 'Japanese Minimalism',
        description:
          'Silence translated into space. A study of Ma and the art of subtraction.',
        image: images.series3,
      },
      {
        id: 'modernist-glass',
        seriesNumber: '04',
        title: 'Modernist Glass',
        description:
          'Transparency, reflection, and the dissolution of boundaries between inside and out.',
        image: images.series4,
      },
      {
        id: 'industrial-utility',
        seriesNumber: '05',
        title: 'Industrial Utility',
        description:
          'Objects born from necessity, celebrated for their unapologetic functionality.',
        image: images.series5,
      },
    ],
  };
};
