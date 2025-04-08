import React, {useEffect, useMemo} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {ProductStackParams} from '@/navigation/types/ProductsStackParams.tsx';
import {selectMergedProductById} from '@/store/product/selectors.ts';
import {useSelector} from 'react-redux';
import DetailProductView from '@/screens/products/DetailProduct/DetailProduct.view.tsx';
import {useProductActions} from '@/hooks/useProductActions.ts';

const DetailProductController: React.FC = () => {
  const [id, setId] = React.useState<number>(-99);
  const route = useRoute<RouteProp<ProductStackParams, 'DetailProduct'>>();
  const productSelector = useMemo(() => selectMergedProductById(id), [id]);
  const navigation = useNavigation();

  const product = useSelector(productSelector);
  const {handleAddToCart, handleIncrementQuantity, handleDecreaseQuantity} =
    useProductActions();

  useEffect(() => {
    if (route.params.productId) {
      setId(route.params.productId);
    }
  }, [route.params]);

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <DetailProductView
      product={product}
      handleDecreaseQuantity={() => handleDecreaseQuantity(product)}
      handleIncrementQuantity={() => handleIncrementQuantity(product)}
      handleAddToCart={() => handleAddToCart(product)}
      handleBack={handleBack}
    />
  );
};

export default DetailProductController;
