import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {useTheme} from 'styled-components/native';

import {IIconProps} from './Icon.types';

export const SearchIcon = ({sizeIcon = 24, color}: IIconProps) => {
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
      <Circle cx={11} cy={11} r={8} />
      <Path d="M21 21L16.65 16.65" fill={'transparent'} />
    </Svg>
  );
};
