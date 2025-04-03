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
}

export const CardProduct = ({
  title,
  description,
  imageUrl,
  price,
  quantity,
}: ICardProductProps) => {
  return (
    <CardContainer>
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
              onPressPlus={() => {}}
              onPressMinus={() => {}}
            />
          ) : (
            <ButtonCustom
              size={'medium'}
              type={'primary'}
              onPress={() => {}}
              text={'Agregar al carrito'}
            />
          )}
        </ButtonContainer>
      </DescriptionContainer>
    </CardContainer>
  );
};
