import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Input } from "react-native-elements";
import { DestinationItem } from "../components/DestinationItem";
import { getDestination } from "../lib/firebase";
import { Destination } from "../types/destination";

import { RootStackParamList } from "../types/navigation";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
};

export const HomeScreen = ({ navigation }: Props) => {
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

  const onPressDestination = (destination: Destination) => {
    navigation.navigate("Destination", { destination });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Input placeholder="行き先はどちらですか？" />

      <Text>今日の旅行先を選択</Text>
      <FlatList
        data={destinations}
        renderItem={({ item }: { item: Destination }) => (
          <DestinationItem
            destination={item}
            onPress={() => onPressDestination(item)}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
