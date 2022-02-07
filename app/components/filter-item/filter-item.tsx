import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';

export type FilterItemType = {
  image?: string;
  name: string;
}

export const FilterItem: React.FC<FilterItemType> = ({image, name}) => {

  const renderFilterImage = () => {
    return <Image style={styles.image} source={{uri: image}}></Image>;
  };

  const renderFilterName = () => {
    return <Text>{name}</Text>;
  };

  return (
    <View style={styles.container}>
      {renderFilterImage()}
      {renderFilterName()}
    </View>
  );
};
