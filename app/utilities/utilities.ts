import { FilterItemType, RestaurantType } from '../components';
import { brands } from './data.json';
import { save, STORAGE_KEYS } from './'
import { dispatchSetFilteredRestaurantsList, dispatchSetRestaurantsList, dispatchSetTagsList } from '../redux/actions';
import { load } from './storage';

export const getTags = async () => {
    var tags: Array<FilterItemType> = []
    const savedRestaurants: Array<RestaurantType> = await load(STORAGE_KEYS.RESTAURANTS)
    if (savedRestaurants) {
        savedRestaurants.forEach(element => {
            tags = tags.concat(element.tags)
        });
    } else {
        brands.forEach(element => {
            tags = tags.concat(element.tags)
        });
    }

    dispatchSetTagsList([...new Map(tags.map(element => [element.name, element])).values()])
}

export const getRestaurants = async () => {
    var restaurants: Array<RestaurantType> = brands;
    const savedRestaurants = await load(STORAGE_KEYS.RESTAURANTS)
    if (savedRestaurants) {
        dispatchSetRestaurantsList(savedRestaurants);
        dispatchSetFilteredRestaurantsList(savedRestaurants);
    } else {
        save(STORAGE_KEYS.RESTAURANTS, restaurants);
        dispatchSetRestaurantsList(restaurants);
        dispatchSetFilteredRestaurantsList(restaurants);
    }
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
    dispatchSetFilteredRestaurantsList(filteredRestaurant);
    return filteredRestaurant;
}

export const searchByRestaurantName = (searchTerm: string, restaurants: Array<RestaurantType>): Array<RestaurantType> => {
    var searchedRestaurant: Array<RestaurantType> = []
    restaurants.forEach(restaurant => {
        if (restaurant.name.includes(searchTerm)) {
            searchedRestaurant.push(restaurant)
        }
    })
    dispatchSetFilteredRestaurantsList(searchTerm == '' ? restaurants : searchedRestaurant);
    return searchedRestaurant;
}

export const addRestaurant = async (name: string, tags: Array<FilterItemType>) => {
    var restaurant: RestaurantType = { name: name, tags: tags }
    var savedRestaurants = await load(STORAGE_KEYS.RESTAURANTS)
    savedRestaurants.push(restaurant)
    save(STORAGE_KEYS.RESTAURANTS, savedRestaurants);
    dispatchSetRestaurantsList(savedRestaurants)
    dispatchSetFilteredRestaurantsList(savedRestaurants)
}

export const getAddedTagsWithImages = (splittedTagArray: Array<string>, tags: Array<FilterItemType>) => {
    const tagArray: Array<FilterItemType> = [];
    splittedTagArray.forEach((tagName) => {
        let tag: FilterItemType = { name: tagName, image: "" };
        let isFound = false
        tags.forEach((tagItem) => {
            if (tagName == tagItem.name) {
                isFound = true
                tag = { name: tagName, image: tagItem.image };
                tagArray.push(tag);
            }
        });
        if (!isFound) {
            tagArray.push(tag);
        }
    });
    return tagArray
}