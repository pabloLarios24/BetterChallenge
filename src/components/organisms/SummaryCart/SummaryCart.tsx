import React from 'react';
import {ButtonContainer, Container, Row} from './SummaryCart.styles.ts';
import {ButtonCustom, TextBase} from '@/components';

interface ISummaryCart {
  subTotal: number;
  totalItems: number;
  onPress: () => void;
}

export const SummaryCart = ({subTotal, totalItems, onPress}: ISummaryCart) => {
  return (
    <Container>
      <Row>
        <TextBase text={'Subtotal '} textType={'h2'} />
        <TextBase text={`$${subTotal}`} textType={'h2'} bold />
      </Row>
      <ButtonContainer>
        <ButtonCustom
          size={'large'}
          type={'primary'}
          onPress={onPress}
          text={`Proceder al pago (${totalItems} productos)`}
        />
      </ButtonContainer>
    </Container>
  );
};
