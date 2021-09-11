import React from "react";
import { View, StyleSheet } from "react-native";

// types

type Props = {};

export const MyComponent: React.FC<Props> = ({}: Props) => {
  return <View style={styles.container}></View>;
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
});
