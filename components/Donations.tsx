import { FlatList } from "react-native";
import React from "react";

import { donationData } from "../data/donations";
import DonationCard from "./DonationCard";

const Donations = () => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={donationData}
      renderItem={({ item }) => <DonationCard item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default Donations;
