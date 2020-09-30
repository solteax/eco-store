import { SET_CATEGORY, SET_SORT_BY } from './types';

export const setCategory = (category: number) => ({
  type: SET_CATEGORY,
  payload: category,
});

export const setSortBy = ({ type, order }: any) => ({
  type: SET_SORT_BY,
  payload: { type, order },
});
