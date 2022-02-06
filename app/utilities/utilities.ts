import { FilterItemType, RestaurantType } from '../components';
import { brands } from './data.json';

export const getTags = (): Array<FilterItemType> => {
    var tags: Array<FilterItemType> = []
    brands.forEach(element => {
        tags = tags.concat(element.tags)
    });
    return [...new Map(tags.map(element => [element.name, element])).values()];
}

export const getRestaurants = (): Array<RestaurantType> => {
    var restaurant: Array<RestaurantType> = brands;
    return restaurant;
}

export const getRestaurantsByFilter = (tag: FilterItemType, restaurants: Array<RestaurantType>): Array<RestaurantType> => {
    var filteredRestaurant: Array<RestaurantType> = []
    restaurants.forEach(restaurant => {
        restaurant.tags.forEach(restaurantTag => {
            if (tag.name == restaurantTag.name) {
                filteredRestaurant.push(restaurant)
            }
        });
    });
    return filteredRestaurant;
}

export const searchByRestaurantName = (searchTerm: string): Array<RestaurantType> => {
    var restaurants: Array<RestaurantType> = brands;
    var searchedRestaurant: Array<RestaurantType> = []
    restaurants.forEach(restaurant => {
        if (restaurant.name.includes(searchTerm)) {
            searchedRestaurant.push(restaurant)
        }
    })
    return searchedRestaurant;
}