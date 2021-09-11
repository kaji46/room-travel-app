import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Image, Text, Input } from "react-native-elements";
import {
  useEffect,
  useState,
} from "react-native-vector-icons/node_modules/@types/react";
import { DestinationItem } from "./src/components/DestinationItem";
import { getDestination } from "./src/lib/firebase";
import { Destination } from "./src/types/Destination";

export default function App() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  useEffect(() => {
    getFirebaseItems();
  }, []);
  const getFirebaseItems = async () => {
    const destinations = await getDestination();
    setDestinations(destinations);
  };
  const onPress = () => {
    // 観光地の詳細ページへ遷移
  };
  const destinationItems = destinations.map((destination, index) => {
    <DestinationItem destination={destination} key={index.toString()} />;
  });
  return (
    <View style={styles.container}>
      <Input placeholder="行き先はどちらですか？" />

      <Text h1>今日の旅行先を選択</Text>
      {destinationItems}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
