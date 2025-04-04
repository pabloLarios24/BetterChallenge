import React from 'react';
import {Container, StyledImage} from './ImageCustom.styles.ts';
import {IconCustom} from '@/components';

interface IImageCustomProps {
  imageUrl?: string;
}

export const ImageCustom = ({imageUrl}: IImageCustomProps) => {
  return (
    <Container>
      {imageUrl ? (
        <StyledImage src={imageUrl} resizeMode={'contain'} />
      ) : (
        <IconCustom name={'image'} sizeIcon={44} color={'text'} />
      )}
    </Container>
  );
};
