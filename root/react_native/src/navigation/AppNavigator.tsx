import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { AuthScreen } from "../screens/AuthScreen";
import { MainTabNavigator } from "./MainTabNavigator";

export const AppNavigator = () => {
  const { user } = useContext(UserContext);

  return (
    <NavigationContainer>
      {!user ? <AuthScreen /> : <MainTabNavigator />}
    </NavigationContainer>
  );
};
