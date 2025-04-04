import {createSelector} from 'reselect';
import {RootState} from '../index.ts';
import {Product} from '@/types';

const selectProducts = (state: RootState) => state.products.products;
const selectCart = (state: RootState) => state.cart.products;

export const selectMergedProducts = createSelector(
  [selectProducts, selectCart],
  (products: Product[], cartItems: Product[]): Product[] => {
    return products.map(product => {
      const itemInCart = cartItems.find(item => item.id === product.id);
      return {
        ...product,
        quantity: itemInCart?.quantity ?? 0,
      };
    });
  },
);
