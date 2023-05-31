import { View, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "../theme";

const DonationTitle = () => (
  <View style={{ paddingHorizontal: 20, paddingVertical: 30 }}>
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "500" }}>Urgent Causes</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ paddingRight: 10, color: theme["color-primary-300"] }}>
          View All
        </Text>
        <AntDesign
          name="arrowright"
          size={24}
          style={{ color: theme["color-primary-300"] }}
        />
      </View>
    </View>
  </View>
);

export default DonationTitle;
