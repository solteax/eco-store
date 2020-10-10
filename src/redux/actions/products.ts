import { SET_DATA, SET_LOADED, SET_CURRENT_PAGE, SET_TOTAL_PRODUCTS } from './types';

interface DataInterface {
  items: [number, string, string, number, number, number];
}

export const setData = (data: DataInterface) => ({
  type: SET_DATA,
  payload: data,
});

export const setTotalProducts = (data: number) => ({
  type: SET_TOTAL_PRODUCTS,
  payload: data,
});

export const setCurrentPage = (data: number) => ({
  type: SET_CURRENT_PAGE,
  payload: data,
});

export const fetchProducts = (
  category: number,
  sortBy: { type: string; order: string },
  currentPage: number = 1,
  itemsPerPage: number,
) => (dispatch: any) => {
  dispatch({
    type: SET_LOADED,
    payload: false,
  });

  fetch(
    `http://localhost:3001/products?${category ? `category=${category}` : ''}&_sort=${
      sortBy.type
    }&_order=${sortBy.order}&_page=${currentPage}&_limit=${itemsPerPage}`,
  )
    .then((res) => res.json())
    .then((products) => {
      dispatch(setData(products));
    });
};

export const fetchTotalProductsAmount = (
  category: number,
  sortBy: { type: string; order: string },
) => (dispatch: any) => {
  fetch(
    `http://localhost:3001/products?${category ? `category=${category}` : ''}&_sort=${
      sortBy.type
    }&_order=${sortBy.order}`,
  )
    .then((res) => res.json())
    .then((amount) => {
      dispatch(setTotalProducts(amount.length));
    });
};
