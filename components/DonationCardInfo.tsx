import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../theme";
import { donationType } from "../types/donationTypes";

const DonationCardInfo = ({ item }: { item: donationType }) => {
  return (
    <View style={{ paddingTop: 10, paddingLeft: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: "500", paddingBottom: 20 }}>
        {item.title}
      </Text>
      <Text style={{ fontSize: 15, paddingVertical: 10 }}>
        ${item.risingAmount} raised from ${item.askingAmount}
      </Text>
      <View
        style={{
          width: "95%",
          height: 7,
          backgroundColor: theme["color-primary-300"],
          borderRadius: 10,
          marginBottom: 10,
        }}
      >
        <View
          style={{
            backgroundColor: theme["color-primary-500"],
            height: "100%",
            width: "50%",
          }}
        ></View>
      </View>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <View
          style={{ display: "flex", flexDirection: "row", marginRight: 25 }}
        >
          <Ionicons name="people-outline" size={20} />
          <Text>250 patrons</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Ionicons name="time-outline" size={20} />
          <Text>10 days left</Text>
        </View>
      </View>
    </View>
  );
};

export default DonationCardInfo;
