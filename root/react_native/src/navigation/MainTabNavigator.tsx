import * as React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { UserScreen } from "../screens/UserScreen";
// import { HomeStackNavigator } from "./HomeStackNavigator";
import { Feather } from "@expo/vector-icons";
import { MainStack } from "./HomeStackNavigator";
// import { SearchScreen } from "../screens/SearchScreen";

const Tab = createBottomTabNavigator();

export const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#900",
        tabBarInactiveTintColor: "#999",
      }}
    >
      <Tab.Screen
        name="Main"
        component={MainStack}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" color={color} size={size} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          headerShown: false,
          tabBarLabel: "User",
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
