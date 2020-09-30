import {
  ADD_TO_CART,
  DECREMENT_AMOUNT,
  INCREMENT_AMOUNT,
  REMOVE_FROM_CART,
} from '../actions/types';

const initialState: any = {
  items: {},
};

interface CartInterface {
  items: {
    [key: number]: {
      imageUrl: string;
      name: string;
      price: number;
      amount: number;
    };
  };
}

export const cart = (state = initialState, action: any) => {
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
