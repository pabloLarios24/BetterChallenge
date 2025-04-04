import {Product} from '@/types';
import {
  ADD_TO_CART,
  DECREMENT_QUANTITY,
  INCREMENT_QUANTITY,
  REMOVE_FROM_CART,
} from '@/store/cart/types.ts';

export const addToCart = (product: Product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const incrementQuantity = (productId: number) => ({
  type: INCREMENT_QUANTITY,
  payload: {productId},
});

export const decrementQuantity = (productId: number) => ({
  type: DECREMENT_QUANTITY,
  payload: {productId},
});

export const removeFromCart = (productId: number) => ({
  type: REMOVE_FROM_CART,
  payload: {productId},
});
