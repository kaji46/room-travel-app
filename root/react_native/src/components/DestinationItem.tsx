import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Image, Text } from "react-native-elements";
import { Destination } from "../types/Destination";

// types

type Props = {
  destination: Destination;
};

export const DestinationItem: React.FC<Props> = ({ destination }: Props) => {
  const { name, topImageUrl } = destination;
  return (
    <Pressable style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Image source={{ uri: topImageUrl }} style={styles.image} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    height: 40,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "#fff",
  },
  image: {},
});
