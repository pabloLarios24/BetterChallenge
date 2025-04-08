import {
  FETCH_PRODUCTS_SUCCESS,
  IProductState,
  ProductActionTypes,
} from './types';

const initialState: IProductState = {
  products: [],
};

export const productReducer = (
  state = initialState,
  action: ProductActionTypes,
): IProductState => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {...state, products: action.payload};
    default:
      return state;
  }
};
