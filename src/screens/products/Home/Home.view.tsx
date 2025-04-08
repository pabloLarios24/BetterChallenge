import React from 'react';
import {FlatList, ListRenderItem, StyleSheet} from 'react-native';

import {verticalScale} from '@/utils';
import {AppLayout, TextBase} from '@/components';
import {IProduct} from '@/types';

interface IHomeViewProps {
  search: string;
  setSearch: (search: string) => void;
  products: IProduct[];
  handleChangeView: () => void;
  renderItem: ListRenderItem<IProduct>;
}

const HomeView = ({
  search,
  setSearch,
  products,
  renderItem,
  handleChangeView,
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
        key={'FlatListHome'}
        data={products}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
        renderItem={renderItem}
        ListEmptyComponent={
          <TextBase text={'Sin productos'} textType={'h1'} bold />
        }
      />
    </AppLayout>
  );
};

export default HomeView;

const styles = StyleSheet.create({
  flatListContent: {
    alignItems: 'center',
    marginTop: verticalScale(10),
    paddingBottom: verticalScale(10),
  },
});
