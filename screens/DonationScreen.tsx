import {
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import DonationCardInfo from "../components/DonationCardInfo";
import { theme } from "../theme";

const DonationScreen = ({ route, navigation }: any) => {
  const { item } = route.params;
  //   console.log(item);
  return (
    <View style={{}}>
      <Image
        style={{ width: "100%", height: "50%" }}
        source={{
          uri: item.donationImage,
        }}
      />
      <DonationCardInfo item={item} />
      <TouchableOpacity
        activeOpacity={0.9}
        style={{
          alignSelf: "center",
          backgroundColor: theme["color-primary-500"],
          width: "90%",
          alignItems: "center",
          paddingVertical: 20,
          borderRadius: 15,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 16,
          }}
        >
          Send Donation
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DonationScreen;
