import { FilterItemType } from '../components';
import { brands } from './data.json';

export const getTags = () => {
    var tags: Array<FilterItemType> = []
    brands.forEach(element => {
        tags = tags.concat(element.tags)
    });
    return [...new Map(tags.map(element => [element.name, element])).values()]
}