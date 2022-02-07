
import {
  ReduxAction,
  SET_RESTAURANT_LIST,
  SET_FILTERED_RESTAURANT_LIST,
  SET_TAGS_LIST
} from '../actions';
import { FilterItemType, RestaurantType } from '../../components';

export type RestaurantState = {
  restaurants: Array<RestaurantType>,
  filteredRestaurants: Array<RestaurantType>
  tags: Array<FilterItemType>
}

const restaurantsReducerInitialState: RestaurantState = {
  restaurants: Array<RestaurantType>(),
  filteredRestaurants: Array<RestaurantType>(),
  tags: Array<FilterItemType>()
};

const restaurantReducer = (state: RestaurantState = restaurantsReducerInitialState, action: ReduxAction): {} => {
  switch (action.type) {
    case SET_RESTAURANT_LIST:
      {
        const restaurants = action.payload;
        return { ...state, restaurants }
      }
      case SET_FILTERED_RESTAURANT_LIST: {
        const filteredRestaurants = action.payload;
        return { ...state, filteredRestaurants }
      }

      case SET_TAGS_LIST: {
        const tags = action.payload;
        return { ...state, tags }
      }

    default:
      return state;
  }
};

export { restaurantReducer }
