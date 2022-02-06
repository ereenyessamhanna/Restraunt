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
  Search,
} from "../../components";
import { navigate, RestaurantNavProps } from "../../navigators";
import { styles } from "./styles";
import {
  getRestaurants,
  getTags,
  getRestaurantsByFilter,
  searchByRestaurantName,
} from "../../utilities";
import { SafeAreaView } from "react-native-safe-area-context";
import { AddNewRestaurant } from "../../modals";

export const Home = ({ navigation, route }: RestaurantNavProps<"Home">) => {
  const tags: Array<FilterItemType> = getTags();
  const restaurants: Array<RestaurantType> = getRestaurants();
  const [filteredResturants, setFilteredResturants] = useState(restaurants);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddModal, setIsAddModal] = useState(false);

  // Functionality
  useEffect(() => {}, []);

  const selectFilter = (item: FilterItemType, index: number) => {
    const filteredResturant = getRestaurantsByFilter(item, restaurants);
    setSelectedIndex(index);
    setFilteredResturants(filteredResturant);
    setSearchTerm("");
  };

  const navigateToDetails = (restaurant: RestaurantType) => {
    navigate("Restaurant", restaurant);
  };

  const searchBySearchTerm = (searchTerm: string) => {
    setSelectedIndex(-1);
    setSearchTerm(searchTerm);
    if (searchTerm == "") {
      setFilteredResturants(restaurants);
    } else {
      const searchedResturant = searchByRestaurantName(searchTerm);
      setFilteredResturants(searchedResturant);
    }
  };

  //UI

  const renderSearch = () => {
    return (
      <Search
        searchTerm={searchTerm}
        onChangeText={(newSearchTerm) => searchBySearchTerm(newSearchTerm)}
      />
    );
  };

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

  const renderFilterItem = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => selectFilter(item, index)}>
        <View style={styles.itemContainer}>
          <FilterItem name={item.name} image={item.image} />
          {selectedIndex == index && (
            <View style={styles.selectedFilter}></View>
          )}
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

  const renderAddNewRestaurantButton = () => {
    return (
      <TouchableOpacity onPress={() => setIsAddModal(true)}>
        <View style={styles.addRestaurantContainer}>
          <Text style={styles.addRestaurant}>{"ADD NEW RESTAURANT"}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderAddNewRestaurantModal = () => {
    if (isAddModal) {
      return <AddNewRestaurant onCloseModal ={()=> setIsAddModal(false)} />
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <ScrollView style={styles.container}>
        {renderSearch()}
        {renderFilterList()}
        {renderRestaurantList()}
      </ScrollView>
      {renderAddNewRestaurantModal()}
      {renderAddNewRestaurantButton()}
    </SafeAreaView>
  );
};
