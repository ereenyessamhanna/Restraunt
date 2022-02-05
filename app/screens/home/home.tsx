import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {FilterItem} from '../../components';
import {RestaurantNavProps} from '../../navigators';
import {styles} from './styles';
import {getTags} from '../../utilities';
import {FilterItemType} from '../../components';

export const Home = ({navigation, route}: RestaurantNavProps<'Home'>) => {
  const tags: Array<FilterItemType> = getTags();
  // Functionality
  useEffect(() => {}, []);

  //UI
  const renderFilterList = () => {
    return (
      <FlatList
        contentContainerStyle={styles.listContentContainer}
        horizontal={true}
        data={tags}
        renderItem={renderFilterItem}
      />
    );
  };

  const renderFilterItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <FilterItem name={item.name} image={item.image} />
      </View>
    );
  };

  return <View style={styles.container}>{renderFilterList()}</View>;
};
