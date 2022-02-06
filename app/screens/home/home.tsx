import React, { useEffect, useState } from "react";
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
import { getRestaurants, getTags, getRestaurantsByFilter } from "../../utilities";

export const Home = ({ navigation, route }: RestaurantNavProps<"Home">) => {
  const tags: Array<FilterItemType> = getTags();
  const restaurants: Array<RestaurantType> = getRestaurants();
  const [filteredResturants, setFilteredResturants] = useState(restaurants)
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Functionality
  useEffect(() => {}, []);

  const selectFilter = (item: FilterItemType, index: number) => {
    const filteredResturant = getRestaurantsByFilter(item,restaurants);
    setSelectedIndex(index);
    setFilteredResturants(filteredResturant)
  };

  const navigateToDetails = (restaurant: RestaurantType) => {
    navigate("Restaurant", restaurant);
  };

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

  const renderFilterItem = ({ item , index}) => {
    return (
      <TouchableOpacity onPress={()=> selectFilter(item,index)}>
        <View style={styles.itemContainer}>
          <FilterItem name={item.name} image={item.image} />
          {selectedIndex == index && <View style={styles.selectedFilter}></View>}
        </View>
      </TouchableOpacity>
    );
  };

  const renderRestaurantList = () => {
    return (
      <FlatList
        data={filteredResturants}
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
      <TouchableOpacity onPress={() => navigateToDetails(item)}>
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
