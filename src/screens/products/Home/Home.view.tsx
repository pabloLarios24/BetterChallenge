import React from 'react';
import {FlatList} from 'react-native';

import {verticalScale} from '@/utils';
import {AppLayout, CardProduct, TextBase} from '@/components';
import {Product} from '@/types';

interface IHomeViewProps {
  search: string;
  setSearch: (search: string) => void;
  products: Product[];
  handleDecreaseQuantity: (product: Product) => void;
  handleIncrementQuantity: (product: Product) => void;
  handleAddToCart: (product: Product) => void;
  handleChangeView: () => void;
  handleDetailProduct: (product: Product) => void;
}

const HomeView = ({
  search,
  setSearch,
  products,
  handleAddToCart,
  handleIncrementQuantity,
  handleDecreaseQuantity,
  handleChangeView,
  handleDetailProduct,
}: IHomeViewProps) => {
  return (
    <AppLayout
      value={search}
      isInput={true}
      onChangeText={setSearch}
      onEndEditing={handleChangeView}
      placeholder={'Buscar en better challenge'}
      onPressDelete={() => setSearch('')}>
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
            onPress={() => handleDetailProduct(item)}
          />
        )}
        ListEmptyComponent={
          <TextBase text={'Sin productos'} textType={'h1'} bold />
        }
      />
    </AppLayout>
  );
};

export default HomeView;
