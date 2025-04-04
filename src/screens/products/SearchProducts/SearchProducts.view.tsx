import React from 'react';
import {FlatList} from 'react-native';

import {verticalScale} from '@/utils';
import {AppLayout, CardProduct, TextBase} from '@/components';
import {Product} from '@/types';

interface ISearchProductsProps {
  search: string;
  setSearch: (search: string) => void;
  products: Product[];
  handleDecreaseQuantity: (product: Product) => void;
  handleIncrementQuantity: (product: Product) => void;
  handleAddToCart: (product: Product) => void;
  handleBack: () => void;
  handleSubmit: () => void;
  handleCleanSearch: () => void;
  handleDetailProduct: (product: Product) => void;
}

const SearchProducts = ({
  search,
  setSearch,
  products,
  handleAddToCart,
  handleIncrementQuantity,
  handleDecreaseQuantity,
  handleBack,
  handleSubmit,
  handleCleanSearch,
  handleDetailProduct,
}: ISearchProductsProps) => {
  return (
    <AppLayout
      value={search}
      isInput={true}
      needBack
      onPressBack={handleBack}
      onChangeText={setSearch}
      placeholder={'Buscar en better challenge'}
      onEndEditing={handleSubmit}
      onPressDelete={handleCleanSearch}>
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
          <TextBase text={'Sin resultados'} textType={'h1'} bold />
        }
      />
    </AppLayout>
  );
};

export default SearchProducts;
