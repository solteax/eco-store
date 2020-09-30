import { SET_CATEGORY, SET_SORT_BY } from '../actions/types';

const initialState = {
  category: 0,
  sortBy: {
    type: 'rating',
    order: 'desc',
  },
};

type ActionType = {
  type: string;
  payload: number | { type: string; order: string };
};

export const filter = (state = initialState, action: ActionType) => {
  if (action.type === SET_CATEGORY) {
    return {
      ...state,
      category: action.payload,
    };
  }

  if (action.type === SET_SORT_BY) {
    return {
      ...state,
      sortBy: action.payload,
    };
  }

  return state;
};
