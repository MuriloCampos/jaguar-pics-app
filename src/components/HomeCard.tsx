import { View, Image, Text } from "react-native";
import { format, formatDistance, formatRelative, subDays } from "date-fns";

export function HomeCard({ src, date }: { src: string; date: Date }) {
  return (
    <View
      style={{
        width: "100%",
        height: 300,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: "hidden",
        marginBottom: 20,
      }}
    >
      <Image
        source={{ uri: src }}
        style={{ width: "100%", height: "90%", marginBottom: 4 }}
      />
      <View style={{ width: "100%" }}>
        <Text style={{ fontWeight: "500" }}>
          {formatRelative(date, new Date())}
        </Text>
      </View>
    </View>
  );
}
