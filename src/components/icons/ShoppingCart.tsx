import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {useTheme} from 'styled-components/native';

import {IIconProps} from './Icon.types';
import {moderateScale, verticalScale} from '@/utils';

export const ShoppingCartIcon = ({sizeIcon = 24, color}: IIconProps) => {
  const theme = useTheme();
  return (
    <Svg
      width={moderateScale(sizeIcon)}
      height={verticalScale(sizeIcon)}
      viewBox="0 0 24 24"
      fill="none"
      stroke={theme.colors[color ?? 'text']}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Circle cx={9} cy={21} r={1} />
      <Circle cx={20} cy={21} r={1} />
      <Path
        d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"
        fill={'transparent'}
      />
    </Svg>
  );
};
