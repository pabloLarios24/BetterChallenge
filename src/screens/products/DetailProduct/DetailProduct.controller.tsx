import React, {useEffect, useMemo} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {ProductStackParams} from '@/navigation/types/ProductsStackParams.tsx';
import {selectMergedProductById} from '@/store/product/selectors.ts';
import {useDispatch, useSelector} from 'react-redux';
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '@/store/cart/actions.ts';
import {addToCartWithToast} from '@/utils';
import {RootState} from '@/store';
import DetailProductView from '@/screens/products/DetailProduct/DetailProduct.view.tsx';

const DetailProductController: React.FC = () => {
  const [id, setId] = React.useState<number>(-99);
  const route = useRoute<RouteProp<ProductStackParams, 'DetailProduct'>>();
  const productSelector = useMemo(() => selectMergedProductById(id), [id]);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const product = useSelector(productSelector);
  const cartProducts = useSelector((state: RootState) => state.cart.products);

  useEffect(() => {
    if (route.params.productId) {
      setId(route.params.productId);
    }
  }, [route.params]);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleDecreaseQuantity = () => {
    if (product) {
      if (product.quantity === 1) {
        dispatch(removeFromCart(product.id));
      } else {
        dispatch(decrementQuantity(product.id));
      }
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCartWithToast(dispatch, product, cartProducts);
    }
  };

  const handleIncrementQuantity = () => {
    dispatch(incrementQuantity(product?.id ?? 0));
  };

  return (
    <DetailProductView
      product={product}
      handleDecreaseQuantity={handleDecreaseQuantity}
      handleIncrementQuantity={handleIncrementQuantity}
      handleAddToCart={handleAddToCart}
      handleBack={handleBack}
    />
  );
};

export default DetailProductController;
