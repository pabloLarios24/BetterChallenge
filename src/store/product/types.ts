import {IProduct} from '@/types';

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';

export interface IFetchProductsRequestAction {
  type: typeof FETCH_PRODUCTS_REQUEST;
}

export interface IFetchProductsSuccessAction {
  type: typeof FETCH_PRODUCTS_SUCCESS;
  payload: IProduct[];
}

export type ProductActionTypes =
  | IFetchProductsRequestAction
  | IFetchProductsSuccessAction;

export interface IProductState {
  products: IProduct[];
}
