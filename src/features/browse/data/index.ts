import { ImageSourcePropType } from "react-native";

export type TBrowseCollection = {
  id: string;
  image: ImageSourcePropType;
  series: string;
  title: string;
};

export type TBrowseProduct = {
  id: string;
  image: ImageSourcePropType;
  title: string;
  price: string;
  isAsymmetric?: boolean;
};

export const browseCollections: TBrowseCollection[] = [
  {
    id: "1",
    image: require("@/assets/images/series-1.png"),
    series: "SERIES 01",
    title: "The Brutalist Series",
  },
  {
    id: "2",
    image: require("@/assets/images/series-2.png"),
    series: "SERIES 02",
    title: "Nordic Woodcraft",
  },
  {
    id: "3",
    image: require("@/assets/images/series-3.png"), series: "SERIES 03",
    title: "Luminous Objects",
  },
];

export const browseProducts: TBrowseProduct[] = [
  {
    id: "1",
    image: require("@/assets/images/bottle-1.png"),
    title: "Earthen Vessel No. 04",
    price: "$420.00",
    isAsymmetric: true,
  },
  {
    id: "2",
    image: require("@/assets/images/chair-2.png"),
    title: "The Artek Lounge",
    price: "$1,850.00",
  },
  {
    id: "3",
    image: require("@/assets/images/light.png"),
    title: "Brushed Brass Task Lamp",
    price: "$315.00",
  },
  {
    id: "4",
    image: require("@/assets/images/folio.png"),
    title: "Linear Study 09",
    price: "$580.00",
    isAsymmetric: true,
  },
];

export const categories = [
  "FURNITURE",
  "LIGHTING",
  "TEXTILES",
  "CERAMICS",
  "OBJECTS",
  "ARCHIVE",
];
