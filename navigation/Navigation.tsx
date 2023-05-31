import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: "#e91e63",
          tabBarHideOnKeyboard: true,
        }}
      >
        <Tab.Screen
          component={HomeScreen}
          name="Home"
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: () => <MaterialCommunityIcons name="home" size={30} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
