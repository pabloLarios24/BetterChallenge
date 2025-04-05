import React from 'react';
import {
  ButtonContainer,
  CardContainer,
  DescriptionContainer,
  ImageContainer,
} from './CardProduct.styles.ts';
import {ButtonCustom, ImageCustom, SpinnerInput, TextBase} from '@/components';

interface ICardProductProps {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  quantity: number;
  addToCart: () => void;
  increment: () => void;
  decrement: () => void;
  onPress?: () => void;
}

const CardProductPureComponent = ({
  title,
  description,
  imageUrl,
  price,
  quantity,
  addToCart,
  decrement,
  increment,
  onPress,
}: ICardProductProps) => {
  console.log('render', title);
  return (
    <CardContainer disabled={!onPress} onPress={onPress}>
      <ImageContainer>
        <ImageCustom imageUrl={imageUrl} />
      </ImageContainer>
      <DescriptionContainer>
        <TextBase text={title} textType={'h3'} bold numberOfLines={1} />
        <TextBase text={description} textType={'p'} numberOfLines={2} />
        <TextBase text={`$${price}`} textType={'p'} bold />
        <ButtonContainer>
          {quantity > 0 ? (
            <SpinnerInput
              value={quantity}
              onPressPlus={increment}
              onPressMinus={decrement}
            />
          ) : (
            <ButtonCustom
              size={'medium'}
              type={'primary'}
              onPress={addToCart}
              text={'Agregar al carrito'}
            />
          )}
        </ButtonContainer>
      </DescriptionContainer>
    </CardContainer>
  );
};

export const CardProduct = React.memo(
  CardProductPureComponent,
  (prevProps, nextProps) => {
    return (
      prevProps.title === nextProps.title &&
      prevProps.description === nextProps.description &&
      prevProps.imageUrl === nextProps.imageUrl &&
      prevProps.price === nextProps.price &&
      prevProps.quantity === nextProps.quantity
    );
  },
);
