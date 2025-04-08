import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectFilteredProducts} from '@/store/product/selectors.ts';
import {fetchProductsRequest} from '@/store/product/actions.ts';
import SearchProductsView from '@/screens/products/SearchProducts/SearchProducts.view.tsx';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {ProductStackParams} from '@/navigation/types/ProductsStackParams.tsx';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootState} from '@/store';
import {useProductActions} from '@/hooks/useProductActions.ts';
import {ListRenderItem} from 'react-native';
import {IProduct} from '@/types';
import {CardProduct} from '@/components';

const SearchProductsController: React.FC = () => {
  const route = useRoute<RouteProp<ProductStackParams, 'SearchProduct'>>();
  const [searchQuery, setSearchQuery] = useState('');
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();
  const filteredSelector = useMemo(
    () => selectFilteredProducts(searchQuery),
    [searchQuery],
  );
  const products = useSelector(filteredSelector);
  const cartProducts = useSelector((state: RootState) => state.cart.products);
  const {
    handleAddToCart,
    handleIncrementQuantity,
    handleDecreaseQuantity,
    handleDetailProduct,
  } = useProductActions(cartProducts);
  const navigation =
    useNavigation<NativeStackNavigationProp<ProductStackParams>>();

  useEffect(() => {
    dispatch(fetchProductsRequest() as any);
  }, [dispatch]);

  useEffect(() => {
    if (route.params.searchValue) {
      setSearch(route.params.searchValue);
      setSearchQuery(route.params.searchValue);
    }
  }, [route.params]);

  const handleSubmit = () => {
    setSearchQuery(search);
  };

  const handleCleanSearch = () => {
    setSearch('');
    setSearchQuery('');
  };

  const handleBack = () => {
    navigation.goBack();
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
    <SearchProductsView
      search={search}
      setSearch={setSearch}
      handleCleanSearch={handleCleanSearch}
      products={products}
      handleSubmit={handleSubmit}
      renderItem={renderItem}
      handleBack={handleBack}
    />
  );
};

export default SearchProductsController;
