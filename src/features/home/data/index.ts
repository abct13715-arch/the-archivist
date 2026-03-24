import { images } from "@/assets";
import { TFeaturedCollection } from "@/types";
import { ImageSourcePropType } from "react-native";

export const featuredCollection: TFeaturedCollection = {
  id: "1",
  title: "Curating the\nUnseen Presence.",
  description:
    "An exploration of brutalist furniture and the emotional resonance of raw concrete in domestic spaces.",
  image: images.homeCollection,
  imageCaption: "ARCHITECTURAL MONOLITH 01",
  volume: "VOLUME 04 / ISSUE 02",
};

type TAcquisition = {
  id: string;
  image: ImageSourcePropType;
  category: string;
  name: string;
  price: string;
};

export const useAcquisitions = () => {
  const acquisitions: TAcquisition[] = [
    {
      id: "1",
      image: require("@/assets/images/bowl.png"),
      category: "CERAMICS",
      name: "Porous Vessel No. 14",
      price: "$240.00",
    },
    {
      id: "2",
      image: require("@/assets/images/stone-monolith.png"),
      category: "FOUNDRY",
      name: "Obsidian Pillar Mount",
      price: "$165.00",
    },
    {
      id: "3",
      image: require("@/assets/images/chair.png"),
      category: "TEXTILES",
      name: "Raw Flax Runner",
      price: "$95.00",
    },
    {
      id: "4",
      image: require("@/assets/images/clock.png"),
      category: "WOODWORK",
      name: "Charred Oak Plinth",
      price: "$310.00",
    },
  ];

  return { acquisitions };
};

type TCurator = {
  id: string;
  image: ImageSourcePropType;
  location: string;
  name: string;
  quote: string;
  selections: number;
};

export const useCurators = () => {
  const curators: TCurator[] = [
    {
      id: "1",
      image: require("@/assets/images/curator-1.png"),
      location: "STOCKHOLM, SE",
      name: "Marcus Thorne",
      quote: "Beauty is found in the removal of the unnecessary.",
      selections: 84,
    },
    {
      id: "2",
      image: require("@/assets/images/curator-2.png"),
      location: "LONDON, UK",
      name: "Sienna Leigh",
      quote: "Objects tell the stories that history books forget.",
      selections: 122,
    },
    {
      id: "3",
      image: require("@/assets/images/profile-face.png"),
      location: "TOKYO, JP",
      name: "Kenji Sato",
      quote: "The grain of the wood dictates the final form.",
      selections: 86,
    },
  ];

  return { curators };
};
