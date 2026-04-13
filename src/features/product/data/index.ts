import { ImageSourcePropType } from "react-native";

export type TProductSpecs = {
  year?: string;
  movement?: string;
  diameter?: string;
  caseMaterial?: string;
  condition?: string;
  accessories?: string;
};

export type TRelatedProduct = {
  id: string;
  brand: string;
  title: string;
  price: string;
  image: ImageSourcePropType;
};

export type TProductDetail = {
  id: string;
  image: ImageSourcePropType;
  images?: ImageSourcePropType[];
  condition: string;
  title: string;
  subtitle?: string;
  price: string;
  priceLabel?: string;
  curatedBy: string;
  rating: number;
  totalRatings: number;
  quote?: string;
  description?: string[];
  specs?: TProductSpecs;
  relatedProducts?: TRelatedProduct[];
};

export const productList: TProductDetail[] = [
  {
    id: "1",
    image: require("@/assets/images/bottle-1.png"),
    condition: "CURATED",
    title: "Earthen Vessel No. 04",
    subtitle: "Ceramic • Stoneware",
    price: "$420.00",
    priceLabel: "Available for immediate acquisition",
    curatedBy: "The Heritage Loft",
    rating: 4.8,
    totalRatings: 24,
    quote: "A definitive expression of minimal form, this vessel embodies the essence of wabi-sabi aesthetics.",
    description: [
      "Hand-thrown by master ceramicist in rural Japan, each vessel carries the unique imprint of its maker's hands. The irregular glaze pattern emerges from a 72-hour firing process in a wood-fired kiln.",
      "This particular piece demonstrates exceptional balance between function and form, suitable for both dried floral arrangements and as a standalone sculptural presence.",
    ],
    specs: {
      year: "2024",
      movement: "N/A",
      diameter: "18cm",
      caseMaterial: "Stoneware",
      condition: "Excellent",
      accessories: "Certificate of Authenticity",
    },
    relatedProducts: [
      {
        id: "2",
        brand: "CERAMICS",
        title: "Bowl No. 07",
        price: "$180.00",
        image: require("@/assets/images/bowl.png"),
      },
      {
        id: "3",
        brand: "CERAMICS",
        title: "Vase No. 12",
        price: "$320.00",
        image: require("@/assets/images/bottle-2.png"),
      },
    ],
  },
  {
    id: "2",
    image: require("@/assets/images/chair-2.png"),
    condition: "CURATED",
    title: "The Artek Lounge",
    subtitle: "Furniture • Teak",
    price: "$1,850.00",
    priceLabel: "Limited availability",
    curatedBy: "Nordic Archive",
    rating: 4.9,
    totalRatings: 42,
    quote: "A masterclass in organic modernism, where every curve serves purpose.",
    description: [
      "Designed in the 1960s by Finnish master craftsman, this lounge chair represents the pinnacle of Scandinavian design philosophy.",
      "Crafted from sustainably sourced Finnish teak with hand-stitched leather upholstery.",
    ],
    specs: {
      year: "1965",
      movement: "N/A",
      diameter: "N/A",
      caseMaterial: "Teak & Leather",
      condition: "Very Good",
      accessories: "Original Certificate",
    },
    relatedProducts: [],
  },
  {
    id: "3",
    image: require("@/assets/images/light.png"),
    condition: "CURATED",
    title: "Brushed Brass Task Lamp",
    subtitle: "Lighting • Brass",
    price: "$315.00",
    priceLabel: "In stock",
    curatedBy: "Lumina Studio",
    rating: 4.6,
    totalRatings: 18,
    specs: {
      year: "2023",
      movement: "N/A",
      diameter: "15cm",
      caseMaterial: "Brushed Brass",
      condition: "New",
      accessories: "Bulb included",
    },
    relatedProducts: [],
  },
  {
    id: "4",
    image: require("@/assets/images/folio.png"),
    condition: "CURATED",
    title: "Linear Study 09",
    subtitle: "Objects • Brass",
    price: "$580.00",
    curatedBy: "Atelier Form",
    rating: 4.7,
    totalRatings: 12,
    relatedProducts: [],
  },
  {
    id: "5",
    image: require("@/assets/images/bowl.png"),
    condition: "CURATED",
    title: "Hand-Turned Oak Bowl",
    subtitle: "Ceramics • Oak",
    price: "$210.00",
    curatedBy: "Woodcraft Collective",
    rating: 4.5,
    totalRatings: 8,
    relatedProducts: [],
  },
  {
    id: "6",
    image: require("@/assets/images/clock.png"),
    condition: "CURATED",
    title: "Minimalist Wall Clock",
    subtitle: "Objects • Steel",
    price: "$450.00",
    curatedBy: "Time Gallery",
    rating: 4.8,
    totalRatings: 31,
    relatedProducts: [],
  },
];

export const getProductById = (id: string): TProductDetail | undefined => {
  return productList.find((p) => p.id === id);
};