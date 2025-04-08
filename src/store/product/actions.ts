import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  IFetchProductsRequestAction,
  IFetchProductsSuccessAction,
} from './types';
import {IProduct} from '@/types';

export const fetchProductsRequest = (): IFetchProductsRequestAction => ({
  type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (
  products: IProduct[],
): IFetchProductsSuccessAction => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});
