import React from 'react';
import {ButtonContainer, Container, Row} from './SummaryCart.styles.ts';
import {ButtonCustom, TextBase} from '@/components';
import {TEXTS} from '@/constants';

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
        <TextBase text={`$${subTotal.toFixed(2)}`} textType={'h2'} bold />
      </Row>
      <ButtonContainer>
        <ButtonCustom
          size={'large'}
          type={'primary'}
          onPress={onPress}
          text={TEXTS.buttons.startPay(totalItems)}
        />
      </ButtonContainer>
    </Container>
  );
};
