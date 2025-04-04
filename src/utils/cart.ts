import {Dispatch} from 'redux';
import {Product} from '@/types';
import {addToCart} from '@/store/cart/actions';
import {addToast} from '@/store/toast/actions';

/**
 * Add new product to cart and show toast
 *
 * @param dispatch - function by redux
 * @param product - product to add
 * @param cartItems - array products in cart
 */
export const addToCartWithToast = (
  dispatch: Dispatch,
  product: Product,
  cartItems: Product[],
) => {
  const isAlreadyInCart = cartItems.some(item => item.id === product.id);

  dispatch(addToCart(product));

  if (!isAlreadyInCart) {
    dispatch(
      addToast({
        id: Date.now().toString(),
        type: 'success',
        message: 'Producto añadido al carrito',
      }),
    );
  }
};
