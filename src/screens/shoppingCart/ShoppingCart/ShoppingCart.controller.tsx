import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {ListRenderItem} from 'react-native';

import {RootState} from '@/store';
import {Product} from '@/types';
import ShoppingCartView from '@/screens/shoppingCart/ShoppingCart/ShoppingCart.view.tsx';
import {
  selectTotalCartItems,
  selectTotalCartPrice,
} from '@/store/cart/selectors.ts';
import {CardProduct} from '@/components';
import {useProductActions} from '@/hooks/useProductActions.ts';

const ShoppingCartController: React.FC = () => {
  const cartProducts = useSelector((state: RootState) => state.cart.products);
  const totalItems = useSelector(selectTotalCartItems);
  const totalAmount = useSelector(selectTotalCartPrice);

  const {handleAddToCart, handleIncrementQuantity, handleDecreaseQuantity} =
    useProductActions(cartProducts);

  const renderItem: ListRenderItem<Product> = useCallback(
    ({item}: {item: Product}) => {
      const handleDecrement = () => handleDecreaseQuantity(item);
      const handleAdd = () => handleAddToCart(item);
      const handleIncrement = () => handleIncrementQuantity(item);
      return (
        <CardProduct
          imageUrl={item.image}
          title={item.title}
          description={item.description}
          price={item.price}
          quantity={item.quantity ?? 0}
          decrement={handleDecrement}
          addToCart={handleAdd}
          increment={handleIncrement}
        />
      );
    },
    [handleIncrementQuantity, handleDecreaseQuantity, handleAddToCart],
  );

  return (
    <ShoppingCartView
      products={cartProducts}
      totalItems={totalItems}
      totalAmount={totalAmount}
      renderItem={renderItem}
    />
  );
};

export default ShoppingCartController;
