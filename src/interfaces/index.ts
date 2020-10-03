// store

interface filter {
  category: number;
  sortBy: {
    type: string;
    order: string;
  };
}

export interface productItem {
  id: number;
  price: number;
  category: number;
  rating: number;
  name: string;
  imageUrl: string;
}

export interface products {
  totalProducts: number;
  currentPage: number;
  itemsPerPage: number;
  isDataLoaded: boolean;
  items?: productItem[] | [];
}

export interface cartItem {
  imageUrl: string;
  name: string;
  price: number;
  amount: number;
}

export interface cart {
  items:
    | {
        [key: number]: cartItem;
      }
    | {};
}

export interface store {
  filter: filter;
  products: products;
  cart: cart;
}
