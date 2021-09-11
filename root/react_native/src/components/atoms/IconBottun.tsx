import { ComponentProps } from "react";
import * as React from "react";

import { FC } from "react";
import { StyleSheet, Pressable, GestureResponderEvent } from "react-native";
import { Feather } from "@expo/vector-icons";

type Props = {
  name: ComponentProps<typeof Feather>["name"];
  color?: string;
  onPress: (event: GestureResponderEvent) => void;
};

export const IconButton: FC<Props> = ({
  name,
  color = "#000",
  onPress,
}: Props) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Feather name={name} color={color} size={32} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
});
