import React from 'react';
import {
  ContainerImage,
  Row,
} from '@/screens/products/DetailProduct/DetailProduct.styles.ts';
import {
  AppLayout,
  ButtonCustom,
  ImageCustom,
  SpinnerInput,
  TextBase,
} from '@/components';
import {IProduct} from '@/types';

interface IDetailProductView {
  product?: IProduct;
  handleDecreaseQuantity: () => void;
  handleIncrementQuantity: () => void;
  handleAddToCart: () => void;
  handleBack: () => void;
}

const DetailProductView: React.FC<IDetailProductView> = ({
  product,
  handleBack,
  handleAddToCart,
  handleDecreaseQuantity,
  handleIncrementQuantity,
}) => {
  return (
    <AppLayout needBack onPressBack={handleBack} title={'Detalle del producto'}>
      <ContainerImage>
        <ImageCustom imageUrl={product?.image ?? ''} />
        <Row>
          <TextBase
            textType={'h1'}
            text={product?.title ?? '' + ` $${product?.price ?? ''}`}
            bold
          />
        </Row>
        <Row>
          <TextBase textType={'p'} text={product?.description ?? ''} />
        </Row>
        <Row>
          <TextBase
            textType={'h1'}
            text={'$ ' + product?.price.toFixed(2) ?? ''}
            bold
          />
        </Row>
        <Row>
          {(product?.quantity ?? 0) > 0 ? (
            <SpinnerInput
              value={product?.quantity ?? 0}
              onPressPlus={handleIncrementQuantity}
              onPressMinus={handleDecreaseQuantity}
            />
          ) : (
            <ButtonCustom
              size={'medium'}
              type={'primary'}
              onPress={handleAddToCart}
              text={'Agregar al carrito'}
            />
          )}
        </Row>
      </ContainerImage>
    </AppLayout>
  );
};

export default DetailProductView;
