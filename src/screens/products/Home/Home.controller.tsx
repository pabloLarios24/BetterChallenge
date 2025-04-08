import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectMergedProducts} from '@/store/product/selectors.ts';
import {IProduct} from '@/types';
import {fetchProductsRequest} from '@/store/product/actions.ts';
import HomeView from '@/screens/products/Home/Home.view.tsx';
import {ProductStackParams} from '@/navigation/types/ProductsStackParams.tsx';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {ListRenderItem} from 'react-native';
import {CardProduct} from '@/components';
import {useProductActions} from '@/hooks/useProductActions.ts';
import {Dispatch} from 'redux';
import {ProductActionTypes} from '@/store/product/types.ts';

const HomeController: React.FC = () => {
  const dispatch = useDispatch<Dispatch<ProductActionTypes>>();
  const products = useSelector(selectMergedProducts);
  const {
    handleAddToCart,
    handleIncrementQuantity,
    handleDecreaseQuantity,
    handleDetailProduct,
  } = useProductActions();
  const navigation =
    useNavigation<NativeStackNavigationProp<ProductStackParams>>();

  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, [dispatch]);

  const handleChangeView = () => {
    navigation.navigate('SearchProduct', {searchValue: search});
    setSearch('');
  };

  const renderItem: ListRenderItem<IProduct> = useCallback(
    ({item}: {item: IProduct}) => {
      const handleDecrement = () => handleDecreaseQuantity(item);
      const handleAdd = () => handleAddToCart(item);
      const handleIncrement = () => handleIncrementQuantity(item);
      const handleDetail = () => handleDetailProduct(item);
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
          onPress={handleDetail}
        />
      );
    },
    [
      handleIncrementQuantity,
      handleDecreaseQuantity,
      handleAddToCart,
      handleDetailProduct,
    ],
  );

  return (
    <HomeView
      search={search}
      setSearch={setSearch}
      handleChangeView={handleChangeView}
      products={products}
      renderItem={renderItem}
    />
  );
};

export default HomeController;
