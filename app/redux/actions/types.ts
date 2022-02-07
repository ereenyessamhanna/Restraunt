export interface ReduxAction {
  type: string,
  payload: any
}

export const SET_RESTAURANT_LIST = "SET_RESTAURANT_LIST";
export const SET_FILTERED_RESTAURANT_LIST = "SET_FILTERED_RESTAURANT_LIST";
export const SET_TAGS_LIST = "SET_TAGS_LIST";
