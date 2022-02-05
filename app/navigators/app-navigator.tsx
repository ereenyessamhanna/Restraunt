import React from 'react';
import {RouteProp} from '@react-navigation/core';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';
import {navigationRef} from './';
import {Home} from '../screens';

// Types
interface NavigationProps
extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

interface RestaurantStackProps {}

export type RestaurantParamList = {
  Home: undefined;
};

export type RestaurantNavProps<T extends keyof RestaurantParamList> = {
  navigation: StackNavigationProp<RestaurantParamList, T>;
  route: RouteProp<RestaurantParamList, T>;
};

// Navigators
const RestaurantStack: React.FC<RestaurantStackProps> = () => {
  const Stack = createNativeStackNavigator<RestaurantParamList>();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export const AppNavigator: React.FC<NavigationProps> = (
  props: NavigationProps,
) => {
  return (
    <NavigationContainer ref={navigationRef} {...props}>
      <RestaurantStack />
    </NavigationContainer>
  );
};
