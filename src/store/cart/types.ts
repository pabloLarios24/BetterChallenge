import {Product} from '@/types';

export const ADD_TO_CART = 'ADD_TO_CART ';
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export interface AddToCartAction {
  type: typeof ADD_TO_CART;
  payload: Product;
}

export interface IncrementQuantityAction {
  type: typeof INCREMENT_QUANTITY;
  payload: {productId: number};
}

export interface DecrementQuantityAction {
  type: typeof DECREMENT_QUANTITY;
  payload: {productId: number};
}

export interface RemoveFromCartAction {
  type: typeof REMOVE_FROM_CART;
  payload: {productId: number};
}

export type CartActionTypes =
  | AddToCartAction
  | IncrementQuantityAction
  | DecrementQuantityAction
  | RemoveFromCartAction;

export interface CartState {
  products: Product[];
}
