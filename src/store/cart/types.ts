import {IProduct} from '@/types';

// ADD
export const ADD_TO_CART_REQUEST = 'ADD_TO_CART_REQUEST';
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';

// INCREMENT
export const INCREMENT_QUANTITY_REQUEST = 'INCREMENT_QUANTITY_REQUEST';
export const INCREMENT_QUANTITY_SUCCESS = 'INCREMENT_QUANTITY_SUCCESS';

// DECREMENT
export const DECREMENT_QUANTITY_REQUEST = 'DECREMENT_QUANTITY_REQUEST';
export const DECREMENT_QUANTITY_SUCCESS = 'DECREMENT_QUANTITY_SUCCESS';
// REMOVE
export const REMOVE_FROM_CART_REQUEST = 'REMOVE_FROM_CART_REQUEST';
export const REMOVE_FROM_CART_SUCCESS = 'REMOVE_FROM_CART_SUCCESS';

export interface IAddToCartRequestAction {
  type: typeof ADD_TO_CART_REQUEST;
  payload: IProduct;
}

export interface IAddToCartSuccessAction {
  type: typeof ADD_TO_CART_SUCCESS;
  payload: IProduct;
}

export interface IIncrementCartRequestAction {
  type: typeof INCREMENT_QUANTITY_REQUEST;
  payload: number;
}

export interface IIncrementCartSuccessAction {
  type: typeof INCREMENT_QUANTITY_SUCCESS;
  payload: number;
}

export interface IDecrementCartRequestAction {
  type: typeof DECREMENT_QUANTITY_REQUEST;
  payload: number;
}

export interface IDecrementCartSuccessAction {
  type: typeof DECREMENT_QUANTITY_SUCCESS;
  payload: number;
}

export interface IRemoveFromCartRequestAction {
  type: typeof REMOVE_FROM_CART_REQUEST;
  payload: number;
}

export interface IRemoveFromCartSuccessAction {
  type: typeof REMOVE_FROM_CART_SUCCESS;
  payload: number;
}

export type CartActionTypes =
  | IAddToCartRequestAction
  | IAddToCartSuccessAction
  | IIncrementCartRequestAction
  | IIncrementCartSuccessAction
  | IDecrementCartRequestAction
  | IDecrementCartSuccessAction
  | IRemoveFromCartRequestAction
  | IRemoveFromCartSuccessAction;

export interface ICartState {
  products: IProduct[];
}
