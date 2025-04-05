import {createSelector} from 'reselect';
import {RootState} from '../index.ts';
import {Product} from '@/types';

const selectProducts = (state: RootState) => state.products.products;
const selectCart = (state: RootState) => state.cart.products;

export const selectMergedProducts = createSelector(
  [selectProducts, selectCart],
  (products, cartItems): Product[] => {
    return products.map(product => {
      const itemInCart = cartItems.find(item => item.id === product.id);
      const quantity = itemInCart?.quantity ?? 0;
      if (!itemInCart) {
        return product;
      }
      if ((product as any).quantity === quantity) {
        return product;
      }
      return {
        ...product,
        quantity,
      };
    });
  },
);

export const selectFilteredProducts = (searchTerm: string) =>
  createSelector([selectMergedProducts], products =>
    products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()),
    ),
  );

export const selectMergedProductById = (id: number) =>
  createSelector([selectMergedProducts], (products: Product[]) =>
    products.find(product => product.id === id),
  );
