import { cartItem } from '../../interfaces';
import { ADD_TO_CART, DECREMENT_AMOUNT, INCREMENT_AMOUNT, REMOVE_FROM_CART } from './types';

export const addToCart = (obj: { [key: number]: cartItem }) => ({
  type: ADD_TO_CART,
  payload: obj,
});

export const removeFromCart = (id: number) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const incrementAmount = (id: number) => ({
  type: INCREMENT_AMOUNT,
  payload: id,
});

export const decrementAmount = (id: number) => ({
  type: DECREMENT_AMOUNT,
  payload: id,
});
