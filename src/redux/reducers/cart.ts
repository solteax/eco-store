import {
  ADD_TO_CART,
  DECREMENT_AMOUNT,
  INCREMENT_AMOUNT,
  REMOVE_FROM_CART,
} from '../actions/types';

const initialState = {
  items: {},
};

interface ActionInterface {
  type: string;
  payload: any;
}

export const cart = (state: any = initialState, action: ActionInterface) => {
  switch (action.type) {
    case ADD_TO_CART:
      // if (addCartObj.items[action.payload.id]) addCartObj.items[action.payload.id]++;
      // else addCartObj.items[action.payload.id] = 1;

      return {
        // ...state,
        items: {
          ...state.items,
          ...action.payload,
        },
      };

    case REMOVE_FROM_CART:
      delete state.items[action.payload];
      return state;

    case INCREMENT_AMOUNT:
      return {
        items: {
          ...state.items,
          [action.payload]: {
            ...state.items[action.payload],
            amount: state.items[action.payload].amount + 1,
          },
        },
      };

    case DECREMENT_AMOUNT:
      return {
        items: {
          ...state.items,
          [action.payload]: {
            ...state.items[action.payload],
            amount: state.items[action.payload].amount - 1,
          },
        },
      };

    default:
      return state;
  }
};
