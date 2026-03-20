import { ImageSourcePropType } from "react-native";

export type Listing = {
  id: string;
  image: ImageSourcePropType;
  title: string;
  category: string;
  price: string;
  badge?: "AVAILABLE" | "RESERVED";
};

export type Review = {
  id: string;
  name: string;
  text: string;
  rating: number;
};
