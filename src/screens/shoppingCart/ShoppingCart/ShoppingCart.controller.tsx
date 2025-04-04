import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@/store';
import {Product} from '@/types';
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '@/store/cart/actions.ts';
import ShoppingCartView from '@/screens/shoppingCart/ShoppingCart/ShoppingCart.view.tsx';
import {
  selectTotalCartItems,
  selectTotalCartPrice,
} from '@/store/cart/selectors.ts';
import {addToCartWithToast} from '@/utils';

const ShoppingCartController: React.FC = () => {
  const cartProducts = useSelector((state: RootState) => state.cart.products);
  const totalItems = useSelector(selectTotalCartItems);
  const totalAmount = useSelector(selectTotalCartPrice);
  const dispatch = useDispatch();

  const handleDecreaseQuantity = (product: Product) => {
    if (product.quantity) {
      if (product.quantity === 1) {
        dispatch(removeFromCart(product.id));
      } else {
        dispatch(decrementQuantity(product.id));
      }
    }
  };

  const handleAddToCart = (product: Product) => {
    addToCartWithToast(dispatch, product, cartProducts);
  };

  const handleIncrementQuantity = (product: Product) => {
    dispatch(incrementQuantity(product.id));
  };
  return (
    <ShoppingCartView
      products={cartProducts}
      totalItems={totalItems}
      totalAmount={totalAmount}
      handleDecreaseQuantity={handleDecreaseQuantity}
      handleIncrementQuantity={handleIncrementQuantity}
      handleAddToCart={handleAddToCart}
    />
  );
};

export default ShoppingCartController;
