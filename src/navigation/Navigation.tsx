import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DonationScreen from "../screens/DonationScreen";

import { HomeRoute } from "./CustomNavigation";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen component={HomeRoute} name="Home Screen" />
        <Stack.Screen component={DonationScreen} name="Donation" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
