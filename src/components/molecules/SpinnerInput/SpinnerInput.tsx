import React from 'react';

import {Container, ContainerText} from './SpinnerInput.styles.ts';
import {ButtonCustom, TextBase} from '@/components';

interface ISpinnerInputProps {
  value: number;
  onPressPlus: () => void;
  onPressMinus: () => void;
}

export const SpinnerInput = ({
  value,
  onPressMinus,
  onPressPlus,
}: ISpinnerInputProps) => {
  return (
    <Container>
      <ButtonCustom
        onPress={onPressMinus}
        name={'minus'}
        size={'small'}
        type={'primary'}
      />
      <ContainerText>
        <TextBase text={value.toString()} textType={'h2'} bold />
      </ContainerText>
      <ButtonCustom
        onPress={onPressPlus}
        name={'plus'}
        size={'small'}
        type={'primary'}
      />
    </Container>
  );
};
