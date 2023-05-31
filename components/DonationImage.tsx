import { View, Text, Image } from "react-native";
import React from "react";
import IconBadge from "./IconBadge";

const DonationImage = ({ image }: { image: string }) => {
  return (
    <View style={{ height: "50%" }}>
      <Image
        style={{
          height: "100%",
          width: "100%",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
        source={{
          uri: image,
        }}
      />
      <IconBadge />
    </View>
  );
};

export default DonationImage;
