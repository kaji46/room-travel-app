import { ComponentProps } from "react";
import * as React from "react";

import { FC } from "react";
import { StyleSheet, Pressable, GestureResponderEvent } from "react-native";
import { Feather } from "@expo/vector-icons";

type Props = {
  iconName: ComponentProps<typeof Feather>["name"];
  onPress: (event: GestureResponderEvent) => void;
};

export const FloatingActionButton: FC<Props> = ({
  iconName,
  onPress,
}: Props) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Feather name={iconName} color="#fff" size={30} />
    </Pressable>
  );
};

const SIZE = 56;

const styles = StyleSheet.create({
  container: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: "#900",
    position: "absolute",
    right: 16,
    bottom: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
