import { ScrollView } from "react-native";
import { products } from "../data";
import { ProductDetail } from "./product-detail";

export const Browse = () => {
  return (
    <ScrollView>
      <ProductDetail images={products} />
    </ScrollView>
  );
};
