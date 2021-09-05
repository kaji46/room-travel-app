import { StatusBar } from "expo-status-bar";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Image, Text, Input } from "react-native-elements";

export default function App() {
  const onPress = () => {
    // 観光地の詳細ページへ遷移
  };
  return (
    <View style={styles.container}>
      <Input placeholder="行き先はどちらですか？" />

      <Text h1>今日の旅行先を選択</Text>

      <Pressable onPress={onPress}>
        <Text h2>沖縄県</Text>
        <Image
          source={{
            uri: "https://cookbiz.jp/soken/core/wp-content/uploads/2019/09/Fotolia_225618711_S.jpg",
          }}
          style={{ width: 200, height: 200 }}
        />
      </Pressable>
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
