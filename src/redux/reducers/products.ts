import { SET_DATA, SET_LOADED, SET_CURRENT_PAGE, SET_TOTAL_PRODUCTS } from '../actions/types';

const initialState = {
  items: [],
  isDataLoaded: false,
  currentPage: 1,
  itemsPerPage: 8,
  totalProducts: 0,
};

interface ActionInterface {
  type: string;
  payload: any;
}

export const products = (state = initialState, action: ActionInterface) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        items: action.payload,
        isDataLoaded: true,
      };
    case SET_LOADED:
      return {
        ...state,
        isDataLoaded: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_TOTAL_PRODUCTS:
      return {
        ...state,
        totalProducts: action.payload,
      };
    default:
      return state;
  }
};
