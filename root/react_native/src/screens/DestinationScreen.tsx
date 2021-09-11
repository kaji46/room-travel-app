import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { FoodItem } from "../components/FoodItem";
import { MusicItem } from "../components/MusicItem";
import { PictureItem } from "../components/PictureItem";

import { getFoods, getMusics, getPictures } from "../lib/firebase";
import { Food } from "../types/food";
import { Music } from "../types/music";

import { RootStackParamList } from "../types/navigation";
import { Picture } from "../types/picture";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Destination">;
  route: RouteProp<RootStackParamList, "Destination">;
};

export const DestinationScreen = ({ navigation, route }: Props) => {
  const { destination } = route.params;

  // const { reviews, setReviews } = useContext(ReviewsContext);
  const [foods, setFoods] = useState<Array<Food>>([]);
  const [musics, setMusics] = useState<Array<Music>>([]);
  const [pictures, setPictures] = useState<Array<Picture>>([]);
  const onPressMusic = (music: Music) => {};
  const onPressFood = (food: Food) => {};
  const onPressPicture = (picture: Picture) => {};
  useEffect(() => {
    navigation.setOptions({ title: destination.name });
    const fetchReviews = async () => {
      const foods = await getFoods(destination.id);
      const musics = await getMusics(destination.id);
      const pictures = await getPictures(destination.id);
      setFoods(foods);
      setMusics(musics);
      setPictures(pictures);
    };
    fetchReviews();
  }, [destination]);
  return (
    <SafeAreaView style={styles.container}>
      <Text>{destination.name}</Text>
      <Text>{destination.name}の音楽</Text>
      <FlatList
        data={musics}
        renderItem={({ item }: { item: Music }) => (
          <MusicItem music={item} onPress={() => onPressMusic(item)} />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
      <Text>{destination.name}の料理</Text>
      <FlatList
        data={foods}
        renderItem={({ item }: { item: Food }) => (
          <FoodItem food={item} onPress={() => onPressFood(item)} />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
      <Text>{destination.name}の写真</Text>
      <FlatList
        data={pictures}
        renderItem={({ item }: { item: Picture }) => (
          <PictureItem picture={item} onPress={() => onPressPicture(item)} />
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
