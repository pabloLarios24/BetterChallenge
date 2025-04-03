import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {useTheme} from 'styled-components/native';

import {IIconProps} from './Icon.types';

export const SunIcon = ({sizeIcon = 24, color}: IIconProps) => {
  const theme = useTheme();
  return (
    <Svg
      width={sizeIcon}
      height={sizeIcon}
      viewBox="0 0 24 24"
      fill="none"
      stroke={theme.colors[color ?? 'text']}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Circle cx={12} cy={12} r={5} />
      <Path d="M12 1L12 3" fill={'transparent'} />
      <Path d="M12 21L12 23" fill={'transparent'} />
      <Path d="M4.22 4.22L5.64 5.64" fill={'transparent'} />
      <Path d="M18.36 18.36L19.78 19.78" fill={'transparent'} />
      <Path d="M1 12L3 12" fill={'transparent'} />
      <Path d="M21 12L23 12" fill={'transparent'} />
      <Path d="M4.22 19.78L5.64 18.36" fill={'transparent'} />
      <Path d="M18.36 5.64L19.78 4.22" fill={'transparent'} />
    </Svg>
  );
};
