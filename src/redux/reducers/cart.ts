import { loadCartFromStorage } from "../../helpers/loadCartFromStorage"
import {
  ADD_TO_CART,
  DECREMENT_AMOUNT,
  INCREMENT_AMOUNT,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from "../actions/types"

const initialState = {
  items: loadCartFromStorage(),
}

interface ActionInterface {
  type: string
  payload: any
}

export const cart = (state: any = initialState, action: ActionInterface) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        // ...state,
        items: {
          ...state.items,
          ...action.payload,
        },
      }

    case REMOVE_FROM_CART:
      delete state.items[action.payload]
      return state

    case CLEAR_CART:
      return { ...state, items: {} }

    case INCREMENT_AMOUNT:
      return {
        items: {
          ...state.items,
          [action.payload]: {
            ...state.items[action.payload],
            amount: state.items[action.payload].amount + 1,
          },
        },
      }

    case DECREMENT_AMOUNT:
      return {
        items: {
          ...state.items,
          [action.payload]: {
            ...state.items[action.payload],
            amount: state.items[action.payload].amount - 1,
          },
        },
      }

    default:
      return state
  }
}
