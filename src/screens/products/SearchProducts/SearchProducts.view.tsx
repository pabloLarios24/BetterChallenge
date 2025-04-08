import React from 'react';
import {FlatList, ListRenderItem, StyleSheet} from 'react-native';

import {verticalScale} from '@/utils';
import {AppLayout, TextBase} from '@/components';
import {IProduct} from '@/types';
import {TEXTS} from '@/constants';

interface ISearchProductsProps {
  search: string;
  setSearch: (search: string) => void;
  products: IProduct[];
  handleBack: () => void;
  handleSubmit: () => void;
  handleCleanSearch: () => void;
  renderItem: ListRenderItem<IProduct>;
}

const SearchProducts = ({
  search,
  setSearch,
  products,
  handleBack,
  handleSubmit,
  handleCleanSearch,
  renderItem,
}: ISearchProductsProps) => {
  return (
    <AppLayout
      value={search}
      isInput={true}
      needBack
      onPressBack={handleBack}
      onChangeText={setSearch}
      placeholder={TEXTS.placeholders.search}
      onEndEditing={handleSubmit}
      onPressDelete={handleCleanSearch}>
      <FlatList
        key={'FlatListSearch'}
        data={products}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
        renderItem={renderItem}
        ListEmptyComponent={
          <TextBase
            text={TEXTS.messagesEmpty.resultProduct}
            textType={'h1'}
            bold
          />
        }
      />
    </AppLayout>
  );
};

export default SearchProducts;

const styles = StyleSheet.create({
  flatListContent: {
    alignItems: 'center',
    marginTop: verticalScale(10),
    paddingBottom: verticalScale(10),
  },
});
