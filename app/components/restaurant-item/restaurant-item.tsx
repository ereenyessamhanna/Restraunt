import React from "react";
import { View, Text, Image } from "react-native";
import { FilterItemType } from "../";
import { styles } from "./styles";
export type BranchType = {
  name: string;
};

export type ItemType = {
  name: string;
  description: string;
  price: string;
};

export type RestaurantType = {
  name: string;
  logo: string;
  description?: string;
  tags: Array<FilterItemType>;
  branches?: Array<BranchType>;
};

export const RestaurantItem: React.FC<RestaurantType> = ({
  logo,
  name,
  tags,
}) => {

  const renderImage = () => {
    return <Image style={styles.image} source={{ uri: logo }}></Image>;
  };

  const renderName = () => {
    return <Text style={styles.name}>{name}</Text>;
  };

  const renderTags = () => {
    return <Text style={styles.tags} >{tags.map((tag) => `${tag.name}`).join(", ")}</Text>;
  };

  return (
    <View style={styles.container}>
      {renderImage()}
      <View style={styles.innerContainer}>
        {renderName()}
        {renderTags()}
      </View>
    </View>
  );
};
