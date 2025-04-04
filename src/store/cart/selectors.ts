import {createSelector} from 'reselect';
import {RootState} from '@/store';

const selectCartProducts = (state: RootState) => state.cart.products;

export const selectTotalCartItems = createSelector(
  [selectCartProducts],
  products => products.reduce((total, item) => total + (item.quantity ?? 0), 0),
);

export const selectTotalCartPrice = createSelector(
  [selectCartProducts],
  products =>
    products.reduce(
      (total, item) => total + item.price * (item.quantity ?? 1),
      0,
    ),
);
