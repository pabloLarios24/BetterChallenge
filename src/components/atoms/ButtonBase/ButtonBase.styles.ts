import styled, {DefaultTheme} from 'styled-components/native';
import {ButtonBaseSize, ButtonBaseType} from './ButtonBase.types';
import {moderateScale} from '@/utils';

interface IStyledButtonBaseProps {
  $type: ButtonBaseType;
  $size: ButtonBaseSize;
}

const colorsByType: Record<ButtonBaseType, (theme: DefaultTheme) => string> = {
  primary: theme => theme.colors.primary,
  secondary: theme => theme.colors.secondary,
};

const sizeStyles = {
  small: {
    width: `${moderateScale(40)}px`,
    height: `100%`,
  },
  medium: {
    width: `${moderateScale(150)}px`,
    height: `100%`,
  },
  large: {
    width: '100%',
    height: `100%`,
  },
};

export const StyledButtonBase = styled.TouchableOpacity<IStyledButtonBaseProps>`
  align-items: center;
  justify-content: center;
  background-color: ${({theme, $type}) => colorsByType[$type](theme)};
  height: ${({$size}) => sizeStyles[$size].height};
  width: ${({$size}) => sizeStyles[$size].width};
  border-radius: 5px;
  padding: ${moderateScale(10)}px;
  flex-direction: row;
  display: flex;
`;
