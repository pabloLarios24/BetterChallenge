import React from 'react';
import {ITextBaseProps} from './TextBase.types';
import {StyledTextBase} from './TextBase.styles';

export const TextBase = ({
  text,
  textType,
  bold,
  italic,
  isButton,
  ...rest
}: ITextBaseProps) => {
  return (
    <StyledTextBase
      $bold={bold}
      $italic={italic}
      $type={textType}
      $isButton={isButton}
      {...rest}>
      {text}
    </StyledTextBase>
  );
};
