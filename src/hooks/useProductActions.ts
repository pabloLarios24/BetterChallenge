import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {IProduct} from '@/types';
import {ProductStackParams} from '@/navigation/types/ProductsStackParams.tsx';
import {
  addToCartRequest,
  decrementCartRequest,
  incrementCartRequest,
} from '@/store/cart/actions.ts';
import {CartActionTypes} from '@/store/cart/types.ts';
import {Dispatch} from 'redux';

export const useProductActions = () => {
  const dispatch = useDispatch<Dispatch<CartActionTypes>>();
  const navigation =
    useNavigation<NativeStackNavigationProp<ProductStackParams>>();

  const handleAddToCart = useCallback(
    (product?: IProduct) => {
      if (product) {
        dispatch(addToCartRequest(product));
      }
    },
    [dispatch],
  );

  const handleIncrementQuantity = useCallback(
    (product?: IProduct) => {
      if (product) {
        dispatch(incrementCartRequest(product.id));
      }
    },
    [dispatch],
  );

  const handleDecreaseQuantity = useCallback(
    (product?: IProduct) => {
      if (product) {
        dispatch(decrementCartRequest(product.id));
      }
    },
    [dispatch],
  );

  const handleDetailProduct = useCallback(
    (product: IProduct) => {
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
