import * as React from "react";
import { View, StyleSheet, Pressable, Dimensions } from "react-native";
import { Image, Text } from "react-native-elements";
import { Destination } from "../types/destination";
import { Music } from "../types/music";
import { Picture } from "../types/picture";

// types

const { width } = Dimensions.get("window");
const CONTAINER_WIDTH = width / 2;
const PADDING = 16;
const IMAGE_WIDTH = CONTAINER_WIDTH - PADDING * 2;

type Props = {
  picture: Picture;
  onPress: () => void;
};

export const PictureItem: React.FC<Props> = ({ picture, onPress }: Props) => {
  const { name, url } = picture;
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{name}</Text>
      <Image source={{ uri: url }} style={styles.image} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: CONTAINER_WIDTH,
    padding: 16,
  },
  text: {
    fontSize: 16,
    color: "#000",
    marginTop: 8,
    fontWeight: "bold",
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH * 0.7,
  },
});
