import React from "react";
import { View, Text, Image } from "react-native";
import { ItemType } from "../";
import { styles } from "./styles";

export const FoodItem: React.FC<ItemType> = ({
  name,
  price,
  description
}) => {

  const renderName = () => {
    return <Text style={styles.name}>{name}</Text>;
  };

  const renderDescription = () => {
    return <Text numberOfLines={2} style={styles.description}>{description}</Text>;
  };

  const renderPrice = () => {
    return <Text style={styles.price}>{price}</Text>;
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        {renderName()}
        {renderDescription()}
        {renderPrice()}
        </View>
    </View>
  );
};
