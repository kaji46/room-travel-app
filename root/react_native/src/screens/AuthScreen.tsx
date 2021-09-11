import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { FC } from "react";

import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";
import { UserContext } from "../contexts/userContext";
import { signin, updateUser } from "../lib/firebase";
import { registerForPushNotificationsAsync } from "../lib/notification";

export const AuthScreen: FC = () => {
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await signin();
      const pushToken = await registerForPushNotificationsAsync();
      if (pushToken && user.pushToken !== pushToken) {
        await updateUser(user.id!, { pushToken });
        user.pushToken = pushToken;
      }
      setUser(user);
    };
    fetchUser();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size="large" />
      <Text style={styles.text}>ログイン中。。。</Text>
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
  text: {},
});
