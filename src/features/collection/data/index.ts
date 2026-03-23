import { images } from "@/assets";
import { TCollectionDetail } from "@/types";

export const useCollectionDetail = (id: string): TCollectionDetail => {
  return {
    id,
    title: "The Brutalist Series",
    collectionNumber: "OAK",
    badge: "LIMITED EDITION RELEASE",
    heroImage: images.collectionBanner,
    quote:
      "Honesty in material is the ultimate luxury. We strip away the ornament to reveal the soul of the structure.",
    quoteAuthor: "— LEAD ARCHIVIST",
    intentTitle: "THE AESTHETIC INTENT",
    intentDescription: [
      "The Brutalist Series is a curated exploration of raw textures and uncompromising geometry. Inspired by the architectural movement of the 1950s, each piece in this collection celebrates the weight of concrete, the cold precision of steel, and the warmth of seasoned oak.",
      "This is a rejection of the ephemeral. We focus on permanence — objects that command a room through silence rather than noise. Every edge is deliberate; every surface is a testament to the artisan's hand meeting industrial philosophy.",
    ],
    items: [
      {
        id: "1",
        name: "Raw Plinth Stool",
        image: images.rawPlinthStool,
        category: "FURNITURE / OAK",
        price: "$1,240",
      },
      {
        id: "2",
        name: "Foundry Table Lamp",
        image: images.foundryTableLamp,
        category: "LIGHTING / OAK",
        price: "$890",
      },
      {
        id: "3",
        name: "Monolith Wall Clock",
        image: images.monolithWallClock,
        category: "OBJECT / VINTAGE",
        price: "$450",
      },
      {
        id: "4",
        name: "Shetland Wool Throw",
        image: images.shetlandWoolThrow,
        category: "TEXTILE / OAK",
        price: "$320",
      },
    ],
  };
};
