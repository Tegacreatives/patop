import { View, FlatList } from "react-native";
import React, { memo } from "react";

import { donationData } from "../data/donations";
import DonationCard from "./DonationCard";
import SectionTitle from "./SectionTitle";

const Donations = ({ navigation }: any) => {
  const moveToScreen = () => navigation.navigate("List");
  return (
    <View>
      <SectionTitle moveToScreen={moveToScreen} />
      <FlatList
        horizontal
        initialNumToRender={4}
        showsHorizontalScrollIndicator={false}
        data={donationData}
        renderItem={({ item }) => (
          <DonationCard item={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default memo(Donations);
