import { Colors } from "@/constants/theme";
import { Text, View } from "react-native";

type CuratorQuoteProps = {
  quote: string;
  author: string;
};

export const CuratorQuote = ({ quote, author }: CuratorQuoteProps) => {
  return (
    <View
      style={{
        borderLeftColor: Colors.brand.secondary,
        borderLeftWidth: 2,
      }}
      className="pl-6 py-2"
    >
      <Text
        style={{
          color: Colors.light.text,
          fontFamily: "PlayfairDisplay_700Bold",
          fontStyle: "italic",
        }}
        className="text-2xl leading-snug"
      >
        &quot;{quote}&quot;
      </Text>
      <Text
        style={{
          color: Colors.light.textSecondary,
          letterSpacing: 2,
        }}
        className="text-xs mt-3"
      >
        {author.toUpperCase()}
      </Text>
    </View>
  );
};
