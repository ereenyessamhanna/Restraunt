
import { combineReducers } from 'redux';
import { restaurantReducer, RestaurantState } from './restaurants';

export const rootReducer = (state, action) => {
  return appReducer(state, action)
}

const appReducer = combineReducers({
  restaurantState: restaurantReducer,
});

export type ApplicationState = {
  restaurantState: RestaurantState,
}

export type AppState = ReturnType<typeof rootReducer>