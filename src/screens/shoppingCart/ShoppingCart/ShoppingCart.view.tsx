import React from 'react';
import {FlatList} from 'react-native';

import {verticalScale} from '@/utils';
import {AppLayout, CardProduct, SummaryCart, TextBase} from '@/components';
import {Product} from '@/types';

interface IShoppingCartViewProps {
  products: Product[];
  totalAmount: number;
  totalItems: number;
  handleDecreaseQuantity: (product: Product) => void;
  handleIncrementQuantity: (product: Product) => void;
  handleAddToCart: (product: Product) => void;
}

const ShoppingCartView = ({
  products,
  totalAmount,
  totalItems,
  handleAddToCart,
  handleIncrementQuantity,
  handleDecreaseQuantity,
}: IShoppingCartViewProps) => {
  return (
    <AppLayout title={'Carrito de compras'}>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{
          alignItems: 'center',
          marginTop: verticalScale(10),
          paddingBottom: verticalScale(10),
        }}
        renderItem={({item}) => (
          <CardProduct
            imageUrl={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
            quantity={item.quantity ?? 0}
            decrement={() => handleDecreaseQuantity(item)}
            addToCart={() => handleAddToCart(item)}
            increment={() => handleIncrementQuantity(item)}
          />
        )}
        ListFooterComponent={
          <SummaryCart
            subTotal={totalAmount}
            totalItems={totalItems}
            onPress={() => {}}
          />
        }
        ListEmptyComponent={
          <TextBase text={'Sin productos en el carrito'} textType={'h1'} bold />
        }
      />
    </AppLayout>
  );
};

export default ShoppingCartView;
