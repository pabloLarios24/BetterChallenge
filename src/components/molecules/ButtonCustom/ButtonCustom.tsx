import React from 'react';
import {
  ButtonBase,
  ButtonBaseSize,
  ButtonBaseType,
  IconCustom,
  TextBase,
  TextBaseType,
} from '@/components';
import {StyledViewButton} from '@/components/molecules/ButtonCustom/ButtonCustom.styles.ts';
import {ThemeColors} from '@/theme/theme.ts';
import {IconName} from '@/components/atoms/Icon/icons.ts';

interface IButtonCustomProps {
  size: ButtonBaseSize;
  type: ButtonBaseType;
  onPress: () => void;
  disabled?: boolean;
  text?: string;
  textType?: TextBaseType;
  bold?: boolean;
  italic?: boolean;
  name?: IconName;
  color?: ThemeColors;
  sizeIcon?: number;
}

export const ButtonCustom = ({
  onPress,
  size,
  type,
  disabled,
  text,
  textType,
  bold,
  italic,
  sizeIcon,
  name,
  color,
}: IButtonCustomProps) => {
  return (
    <ButtonBase onPress={onPress} type={type} size={size} disabled={disabled}>
      <StyledViewButton>
        {name && <IconCustom name={name} sizeIcon={sizeIcon} color={color} />}
        {text && (
          <TextBase
            textType={textType ?? 'p'}
            text={text}
            bold={bold}
            italic={italic}
            isButton
          />
        )}
      </StyledViewButton>
    </ButtonBase>
  );
};
