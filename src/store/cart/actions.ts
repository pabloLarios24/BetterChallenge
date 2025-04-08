import {
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  DECREMENT_QUANTITY_REQUEST,
  DECREMENT_QUANTITY_SUCCESS,
  IAddToCartRequestAction,
  IAddToCartSuccessAction,
  IDecrementCartRequestAction,
  IDecrementCartSuccessAction,
  IIncrementCartRequestAction,
  IIncrementCartSuccessAction,
  INCREMENT_QUANTITY_REQUEST,
  INCREMENT_QUANTITY_SUCCESS,
  IRemoveFromCartRequestAction,
  IRemoveFromCartSuccessAction,
  REMOVE_FROM_CART_REQUEST,
  REMOVE_FROM_CART_SUCCESS,
} from '@/store/cart/types.ts';
import {IProduct} from '@/types';

export const addToCartRequest = (
  product: IProduct,
): IAddToCartRequestAction => ({
  type: ADD_TO_CART_REQUEST,
  payload: product,
});

export const addToCartSuccess = (
  product: IProduct,
): IAddToCartSuccessAction => ({
  type: ADD_TO_CART_SUCCESS,
  payload: product,
});

export const incrementCartRequest = (
  productId: number,
): IIncrementCartRequestAction => ({
  type: INCREMENT_QUANTITY_REQUEST,
  payload: productId,
});

export const incrementCartSuccess = (
  productId: number,
): IIncrementCartSuccessAction => ({
  type: INCREMENT_QUANTITY_SUCCESS,
  payload: productId,
});

export const decrementCartRequest = (
  productId: number,
): IDecrementCartRequestAction => ({
  type: DECREMENT_QUANTITY_REQUEST,
  payload: productId,
});

export const decrementCartSuccess = (
  productId: number,
): IDecrementCartSuccessAction => ({
  type: DECREMENT_QUANTITY_SUCCESS,
  payload: productId,
});

export const removeFromCartRequest = (
  productId: number,
): IRemoveFromCartRequestAction => ({
  type: REMOVE_FROM_CART_REQUEST,
  payload: productId,
});

export const removeFromCartSuccess = (
  productId: number,
): IRemoveFromCartSuccessAction => ({
  type: REMOVE_FROM_CART_SUCCESS,
  payload: productId,
});
