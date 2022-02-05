import React from "react";
import { FlatList, ScrollView, View } from "react-native";
import { RestaurantType, FoodItem, RestaurantItem } from "../../components";
import { styles } from "./styles";
import { RestaurantNavProps } from "../../navigators";
import { SafeAreaView } from "react-native-safe-area-context";

export const Restaurant = ({
  navigation,
  route,
}: RestaurantNavProps<"Restaurant">) => {
  const restaurant: RestaurantType = route.params;

  //UI
  const renderResturantInformation = () => {
    return (
      <View style={styles.resturant}>
        <RestaurantItem
          name={restaurant.name}
          logo={restaurant.logo}
          tags={restaurant.tags}
        />
      </View>
    );
  };

  const renderItem = ({ item }) => {
    return (
      <View>
        <FoodItem
          name={item.name}
          description={item.description}
          price={item.price}
        />
      </View>
    );
  };

  const renderList = () => {
    return <FlatList data={restaurant.items} renderItem={renderItem} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderResturantInformation()}
      {renderList()}
    </SafeAreaView>
  );
};
