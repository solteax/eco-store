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

export const setCurrentPage = (data: any) => ({
  type: SET_CURRENT_PAGE,
  payload: data,
});

export const fetchProducts = (
  category: number,
  sortBy: any,
  currentPage: number = 1,
  itemsPerPage: number,
) => (dispatch: any) => {
  dispatch({
    type: SET_LOADED,
    payload: false,
  });

  fetch(
    `/products?${category ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${
      sortBy.order
    }&_page=${currentPage}&_limit=${itemsPerPage}`,
  )
    .then((res) => res.json())
    .then((products: any) => {
      dispatch(setData(products));
    });
};

export const fetchTotalProductsAmount = () => (dispatch: any) => {
  fetch('/products')
    .then((res) => res.json())
    .then((amount: any) => {
      dispatch(setTotalProducts(amount.length));
    });
};
