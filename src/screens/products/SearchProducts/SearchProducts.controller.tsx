import React, {useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectFilteredProducts} from '@/store/product/selectors.ts';
import {Product} from '@/types';
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '@/store/cart/actions.ts';
import {fetchProductsRequest} from '@/store/product/actions.ts';
import SearchProductsView from '@/screens/products/SearchProducts/SearchProducts.view.tsx';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {ProductStackParams} from '@/navigation/types/ProductsStackParams.tsx';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {addToCartWithToast} from '@/utils/cart.ts';
import {RootState} from '@/store';

const SearchProductsController: React.FC = () => {
  const route = useRoute<RouteProp<ProductStackParams, 'SearchProduct'>>();
  const [searchQuery, setSearchQuery] = useState('');
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();
  const filteredSelector = useMemo(
    () => selectFilteredProducts(search),
    [searchQuery],
  );
  const products = useSelector(filteredSelector);
  const navigation =
    useNavigation<NativeStackNavigationProp<ProductStackParams>>();
  const cartProducts = useSelector((state: RootState) => state.cart.products);

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

  const handleBack = () => {
    navigation.goBack();
  };

  const handleDetailProduct = (product: Product) => {
    navigation.navigate('DetailProduct', {productId: product.id});
  };

  return (
    <SearchProductsView
      search={search}
      setSearch={setSearch}
      handleCleanSearch={handleCleanSearch}
      products={products}
      handleSubmit={handleSubmit}
      handleDecreaseQuantity={handleDecreaseQuantity}
      handleIncrementQuantity={handleIncrementQuantity}
      handleAddToCart={handleAddToCart}
      handleBack={handleBack}
      handleDetailProduct={handleDetailProduct}
    />
  );
};

export default SearchProductsController;
