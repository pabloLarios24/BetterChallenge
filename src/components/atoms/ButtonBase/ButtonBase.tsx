import React from 'react';

import {IButtonBaseProps} from './ButtonBase.types';
import {StyledButtonBase} from './ButtonBase.styles';

export const ButtonBase = ({
  type,
  size,
  children,
  ...rest
}: IButtonBaseProps) => {
  return (
    <StyledButtonBase $type={type} $size={size} {...rest}>
      {children}
    </StyledButtonBase>
  );
};
