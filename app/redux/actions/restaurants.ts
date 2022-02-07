
import {
  SET_RESTAURANT_LIST,
  SET_FILTERED_RESTAURANT_LIST,
  SET_TAGS_LIST
} from './types'
import { ReduxAction } from '.';
import store from '../store';
import { FilterItemType, RestaurantType } from '../../components';


// ACTIONS
const RestaurantsListAction = (restaurants: Array<RestaurantType>): ReduxAction => {
  return {
    type: SET_RESTAURANT_LIST,
    payload: restaurants
  }
}

const FilteredRestaurantsListAction = (restaurants: Array<RestaurantType>): ReduxAction => {
  return {
    type: SET_FILTERED_RESTAURANT_LIST,
    payload: restaurants
  }
}

const TagsListAction = (tags: Array<FilterItemType>): ReduxAction => {
  return {
    type: SET_TAGS_LIST,
    payload: tags
  }
}

// DISPATCHERS
export const dispatchSetRestaurantsList = (restaurants: Array<RestaurantType>) => {
  store.dispatch(RestaurantsListAction(restaurants));
}

export const dispatchSetFilteredRestaurantsList = (restaurants: Array<RestaurantType>) => {
  store.dispatch(FilteredRestaurantsListAction(restaurants));
}

export const dispatchSetTagsList = (tags: Array<FilterItemType>) => {
  store.dispatch(TagsListAction(tags));
}
