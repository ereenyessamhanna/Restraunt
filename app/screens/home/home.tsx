import React, { useEffect } from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  FilterItem,
  RestaurantType,
  FilterItemType,
  RestaurantItem,
} from "../../components";
import { navigate, RestaurantNavProps } from "../../navigators";
import { styles } from "./styles";
import { getRestaurants, getTags } from "../../utilities";

export const Home = ({ navigation, route }: RestaurantNavProps<"Home">) => {
  const tags: Array<FilterItemType> = getTags();
  const restaurants: Array<RestaurantType> = getRestaurants();
  // Functionality
  useEffect(() => {}, []);

  const navigateToDetails = (restaurant: RestaurantType) => {
    navigate('Restaurant',restaurant)
  }
  
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
      <TouchableOpacity onPress={()=> navigateToDetails(item)}>
        <View style={styles.restaurantItem}>
          <RestaurantItem logo={item.logo} name={item.name} tags={item.tags} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {renderFilterList()}
      {renderRestaurantList()}
    </ScrollView>
  );
};
