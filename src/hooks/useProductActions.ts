import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {Product} from '@/types';
import {decrementQuantity, incrementQuantity} from '@/store/cart/actions';
import {addToCartWithToast} from '@/utils/cart.ts';
import {ProductStackParams} from '@/navigation/types/ProductsStackParams.tsx';

export const useProductActions = (cartProducts: Product[]) => {
  const dispatch = useDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<ProductStackParams>>();

  const handleAddToCart = useCallback(
    (product?: Product) => {
      if (product) {
        addToCartWithToast(dispatch, product, cartProducts);
      }
    },
    [dispatch, cartProducts],
  );

  const handleIncrementQuantity = useCallback(
    (product?: Product) => {
      if (product) {
        dispatch(incrementQuantity(product.id));
      }
    },
    [dispatch],
  );

  const handleDecreaseQuantity = useCallback(
    (product?: Product) => {
      if (product) {
        dispatch(decrementQuantity(product.id));
      }
    },
    [dispatch],
  );

  const handleDetailProduct = useCallback(
    (product: Product) => {
      navigation.navigate('DetailProduct', {productId: product.id});
    },
    [navigation],
  );

  return {
    handleAddToCart,
    handleIncrementQuantity,
    handleDecreaseQuantity,
    handleDetailProduct,
  };
};
