import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../theme";
import { donationType } from "../types/donationTypes";
import DonationImage from "./DonationImage";
import DonationCardInfo from "./DonationCardInfo";

const DonationCard = ({ item }: { item: donationType }) => {
  return (
    <TouchableWithoutFeedback onPress={() => console.log("pressed")}>
      <View
        style={{
          marginHorizontal: 20,
          width: 350,
          height: 340,
          backgroundColor: theme["color-gray"],
          borderRadius: 10,
        }}
      >
        <DonationImage image={item.donationImage} />
        <DonationCardInfo item={item} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DonationCard;
