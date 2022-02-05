import React, { useEffect } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import {
  FilterItem,
  RestaurantType,
  FilterItemType,
  RestaurantItem,
} from "../../components";
import { RestaurantNavProps } from "../../navigators";
import { styles } from "./styles";
import { getRestaurants, getTags } from "../../utilities";

export const Home = ({ navigation, route }: RestaurantNavProps<"Home">) => {
  const tags: Array<FilterItemType> = getTags();
  const restaurants: Array<RestaurantType> = getRestaurants();
  // Functionality
  useEffect(() => {}, []);

  //UI
  const renderFilterList = () => {
    return (
      <FlatList
        contentContainerStyle={styles.listContentContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={tags}
        renderItem={renderFilterItem}
      />
    );
  };

  const renderFilterItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <FilterItem name={item.name} image={item.image} />
      </View>
    );
  };

  const renderRestaurantList = () => {
    return (
      <FlatList
        data={restaurants}
        renderItem={renderRestaurantItem}
        ListHeaderComponent={renderListHeader}
      />
    );
  };

  const renderListHeader = () => {
    return <Text style={styles.restaurantHeader}>Restaurants</Text>;
  };

  const renderRestaurantItem = ({ item }) => {
    return (
      <View style={styles.restaurantItem}>
        <RestaurantItem logo={item.logo} name={item.name} tags={item.tags} />
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {renderFilterList()}
      {renderRestaurantList()}
    </ScrollView>
  );
};
