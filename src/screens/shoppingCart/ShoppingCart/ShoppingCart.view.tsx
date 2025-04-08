import React from 'react';
import {FlatList, ListRenderItem, StyleSheet} from 'react-native';

import {verticalScale} from '@/utils';
import {AppLayout, SummaryCart, TextBase} from '@/components';
import {IProduct} from '@/types';

interface IShoppingCartViewProps {
  products: IProduct[];
  totalAmount: number;
  totalItems: number;
  renderItem: ListRenderItem<IProduct>;
}

const ShoppingCartView = ({
  products,
  totalAmount,
  totalItems,
  renderItem,
}: IShoppingCartViewProps) => {
  return (
    <AppLayout title={'Carrito de compras'}>
      <FlatList
        key={'FlatListShoppingCart'}
        data={products}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
        renderItem={renderItem}
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

const styles = StyleSheet.create({
  flatListContent: {
    alignItems: 'center',
    marginTop: verticalScale(10),
    paddingBottom: verticalScale(10),
  },
});
