import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectMergedProducts} from '@/store/product/selectors.ts';
import {Product} from '@/types';
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '@/store/cart/actions.ts';
import {fetchProductsRequest} from '@/store/product/actions.ts';
import HomeView from '@/screens/products/Home/Home.view.tsx';
import {ProductStackParams} from '@/navigation/types/ProductsStackParams.tsx';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {addToCartWithToast} from '@/utils';
import {RootState} from '@/store';

const HomeController: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectMergedProducts);
  const cartProducts = useSelector((state: RootState) => state.cart.products);
  const navigation =
    useNavigation<NativeStackNavigationProp<ProductStackParams>>();

  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchProductsRequest() as any);
  }, [dispatch]);

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

  const handleChangeView = () => {
    navigation.navigate('SearchProduct', {searchValue: search});
    setSearch('');
  };

  const handleDetailProduct = (product: Product) => {
    navigation.navigate('DetailProduct', {productId: product.id});
  };

  return (
    <HomeView
      search={search}
      setSearch={setSearch}
      handleChangeView={handleChangeView}
      products={products}
      handleDecreaseQuantity={handleDecreaseQuantity}
      handleIncrementQuantity={handleIncrementQuantity}
      handleAddToCart={handleAddToCart}
      handleDetailProduct={handleDetailProduct}
    />
  );
};

export default HomeController;
