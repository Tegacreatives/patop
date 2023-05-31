import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../theme";

const IconBadge = () => {
  return (
    <TouchableOpacity
      onPress={() => console.log("New Press")}
      activeOpacity={1}
      style={{
        backgroundColor: "white",
        padding: 14,
        borderRadius: 50,
        width: 50,
        position: "absolute",
        top: 20,
        right: 20,
      }}
    >
      <View>
        <Ionicons name="bookmark-outline" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default IconBadge;
