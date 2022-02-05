import { FilterItemType, RestaurantType } from '../components';
import { brands } from './data.json';

export const getTags = (): Array<FilterItemType> => {
    var tags: Array<FilterItemType> = []
    brands.forEach(element => {
        tags = tags.concat(element.tags)
    });
    return [...new Map(tags.map(element => [element.name, element])).values()]
}

export const getRestaurants = (): Array<RestaurantType> => {
    var restaurant : Array<RestaurantType> = brands;
    return restaurant;
}