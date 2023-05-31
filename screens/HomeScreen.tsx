import { StyleSheet, SafeAreaView, View, ScrollView } from "react-native";
import React from "react";
import { theme } from "../theme";
import Header from "../components/Header";
import Categories from "../components/Categories";
import DonationTitle from "../components/DonationTitle";
import Donations from "../components/Donations";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View
        style={{
          backgroundColor: "white",
          display: "flex",
          paddingVertical: 20,
        }}
      >
        <Categories />
        <DonationTitle />
        <Donations />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
  text: {
    color: theme["color-primary-500"],
  },
});
