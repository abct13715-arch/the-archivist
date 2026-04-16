import {images} from '@/assets/images';
import {ImageSourcePropType} from 'react-native';

export type TCuratorListing = {
  id: string;
  name: string;
  image: ImageSourcePropType;
  category: string;
  price: string;
  index: string;
};

export type TCuratorReview = {
  id: string;
  name: string;
  text: string;
  rating: number;
  date: string;
};

export type TCuratorProfile = {
  id: string;
  role: string;
  name: string;
  location: string;
  portrait: ImageSourcePropType;
  stats: {
    selections: number;
    collections: number;
    years: number;
  };
  quote: string;
  quoteAuthor: string;
  bio: string;
  approach: string;
  expertise: string[];
  listings: TCuratorListing[];
  reviews: TCuratorReview[];
};

const curatorProfiles: Record<string, TCuratorProfile> = {
  '1': {
    id: '1',
    role: 'Lead Curator',
    name: 'Marcus Thorne',
    location: 'STOCKHOLM, SE',
    portrait: images.curator1,
    stats: {
      selections: 84,
      collections: 12,
      years: 5,
    },
    quote:
      'Beauty is found in the removal of the unnecessary. A practitioner of minimalist honesty in form and function.',
    quoteAuthor: '— Design Philosophy',
    bio: 'Marcus Thorne has spent the last decade sourcing and cataloguing the forgotten monuments of Scandinavian modernism. Based in Stockholm, his practice spans European estates, Japanese wholesale warehouses, and private collections across the Nordic region. His approach prioritizes provenance, material integrity, and the quiet dignity of objects that have outlasted their original contexts.',
    approach:
      'Each selection begins with a question: What does this object refuse to hide? The answer determines whether it belongs in the archive.',
    expertise: [
      'Mid-Century Danish Furniture',
      'Brutalist Architecture Objects',
      'Japanese Minimalist Ceramics',
      'Post-War Scandinavian Design',
    ],
    listings: [
      {
        id: '1',
        index: '01',
        name: 'Monolith Lounge',
        image: images.chair,
        category: 'Furniture',
        price: '$4,200',
      },
      {
        id: '2',
        index: '02',
        name: 'Basalt Form IV',
        image: images.bowl,
        category: 'Object',
        price: '$850',
      },
      {
        id: '3',
        index: '03',
        name: 'Linear Beam',
        image: images.light,
        category: 'Lighting',
        price: '$1,100',
      },
      {
        id: '4',
        index: '04',
        name: 'Woven Silence',
        image: images.flowerPot,
        category: 'Textile',
        price: '$2,800',
      },
      {
        id: '5',
        index: '05',
        name: 'Concrete Resolve',
        image: images.stoneMonolith,
        category: 'Sculpture',
        price: '$3,400',
      },
      {
        id: '6',
        index: '06',
        name: 'Oak Fragment',
        image: images.clock,
        category: 'Furniture',
        price: '$1,650',
      },
    ],
    reviews: [
      {
        id: '1',
        name: 'Elena R.',
        text: "The Monolith Lounge arrived in perfect condition. Marcus's attention to provenance documentation was exceptional.",
        rating: 5,
        date: 'March 2026',
      },
      {
        id: '2',
        name: 'Henrik S.',
        text: 'A genuine expert in brutalist form. The piece selected for my studio fits perfectly within the architectural language.',
        rating: 5,
        date: 'February 2026',
      },
      {
        id: '3',
        name: 'Mia L.',
        text: 'Remarkable eye for pairing objects with spaces. The consultation before purchase was invaluable.',
        rating: 5,
        date: 'January 2026',
      },
      {
        id: '4',
        name: 'Thomas B.',
        text: 'Purchased two pieces. Both exceeded expectations in quality and historical accuracy.',
        rating: 4,
        date: 'December 2025',
      },
    ],
  },
  '2': {
    id: '2',
    role: 'Senior Curator',
    name: 'Sienna Leigh',
    location: 'LONDON, UK',
    portrait: images.curator2,
    stats: {
      selections: 122,
      collections: 18,
      years: 8,
    },
    quote:
      'Objects tell the stories that history books forget. My role is simply to listen.',
    quoteAuthor: '— curatorial approach',
    bio: 'Sienna Leigh is a London-based curator specializing in British industrial design, archive photography, and early Penguin book covers. With a background in art history from the Courtauld Institute, she brings scholarly rigor to her selections while maintaining an eye for the commercially viable.',
    approach:
      'Great design is invisible. It works so well that you stop seeing the object and start experiencing the solution.',
    expertise: [
      'British Industrial Design',
      'Archive Photography',
      'Vintage Book Covers',
      'Ceramic Studio Pottery',
    ],
    listings: [
      {
        id: '1',
        index: '01',
        name: 'GWR Brass Lantern',
        image: images.foundryTableLamp,
        category: 'Lighting',
        price: '$1,800',
      },
      {
        id: '2',
        index: '02',
        name: 'Penguin 1000',
        image: images.folio,
        category: 'Archive',
        price: '$420',
      },
      {
        id: '3',
        index: '03',
        name: 'Studio Vessel',
        image: images.bottle1,
        category: 'Ceramics',
        price: '$680',
      },
      {
        id: '4',
        index: '04',
        name: 'Riveted stool',
        image: images.rawPlinthStool,
        category: 'Furniture',
        price: '$2,100',
      },
    ],
    reviews: [
      {
        id: '1',
        name: 'James C.',
        text: "Sienna's knowledge of industrial design history is unmatched. The GWR lantern is the centerpiece of my study.",
        rating: 5,
        date: 'April 2026',
      },
      {
        id: '2',
        name: 'Alice M.',
        text: 'The Penguin collection she sourced for me was in remarkable condition. True archival quality.',
        rating: 5,
        date: 'March 2026',
      },
    ],
  },
  '3': {
    id: '3',
    role: 'Curator',
    name: 'Kenji Sato',
    location: 'TOKYO, JP',
    portrait: images.curator3,
    stats: {
      selections: 86,
      collections: 9,
      years: 4,
    },
    quote:
      'The grain of the wood dictates the final form. Patience reveals what haste conceals.',
    quoteAuthor: '— material philosophy',
    bio: 'Kenji Sato works between Tokyo and Kyoto, specializing in traditional Japanese craft and its intersection with modernist principles. His selections emphasize the spiritual dimension of material objects—their relationship to ceremony, daily use, and the passage of time.',
    approach:
      "In Japan, we say that objects have spirits. The craftsman's role is to reveal, not to impose.",
    expertise: [
      'Japanese Woodworking',
      'Raku Ceramics',
      'Washi Paper Artifacts',
      'Metalwork',
    ],
    listings: [
      {
        id: '1',
        index: '01',
        name: 'Temple Bowl',
        image: images.bottle2,
        category: 'Ceramics',
        price: '$940',
      },
      {
        id: '2',
        index: '02',
        name: 'Cedar Form',
        image: images.p1,
        category: 'Woodwork',
        price: '$3,200',
      },
      {
        id: '3',
        index: '03',
        name: 'Iron Garden',
        image: images.series1,
        category: 'Metalwork',
        price: '$1,500',
      },
    ],
    reviews: [
      {
        id: '1',
        name: 'Yuki T.',
        text: 'Kenji understands the spiritual dimension of craft. The bowl I acquired holds tea with a special presence.',
        rating: 5,
        date: 'April 2026',
      },
      {
        id: '2',
        name: 'David W.',
        text: 'Exceptional quality and presentation. The packaging itself was a work of art.',
        rating: 5,
        date: 'March 2026',
      },
    ],
  },
};

export const useCuratorProfile = (id: string): TCuratorProfile | undefined => {
  return curatorProfiles[id];
};

export const tabs = ['LISTINGS', 'ABOUT'];
