import { View, Text, FlatList } from "react-native";
import React from "react";
import { categoriesData } from "../data/categories";
import { theme } from "../theme";

const Category = ({ name, icon }: { name: string; icon: string | any }) => (
  <View
    style={{
      marginTop: 8,
      paddingLeft: 20,
    }}
  >
    <Text
      style={{
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginRight: 5,
        backgroundColor: theme["color-primary-400"],
        color: "white",
      }}
    >
      {name} {icon}
    </Text>
  </View>
);

const Categories = () => {
  return (
    <FlatList
      style={{ marginRight: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categoriesData}
      renderItem={({ item }) => (
        <Category name={item.categoryName} icon={item.categoryIcon} />
      )}
      keyExtractor={(item) => item.categoryName}
    />
  );
};

export default Categories;
