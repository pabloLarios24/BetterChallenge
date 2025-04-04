import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  ProductActionTypes,
  ProductState,
} from './types';

const initialState: ProductState = {
  loading: false,
  products: [],
  error: null,
};

export const productReducer = (
  state = initialState,
  action: ProductActionTypes,
): ProductState => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {...state, loading: true, error: null};
    case FETCH_PRODUCTS_SUCCESS:
      return {...state, loading: false, products: action.payload};
    case FETCH_PRODUCTS_FAILURE:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};
