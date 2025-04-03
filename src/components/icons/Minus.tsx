import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {useTheme} from 'styled-components/native';

import {IIconProps} from './Icon.types';

export const MinusIcon = ({size = 24, color}: IIconProps) => {
  const theme = useTheme();
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={theme.colors[color ?? 'text']}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M5 12L19 12" fill={'transparent'} />
    </Svg>
  );
};
