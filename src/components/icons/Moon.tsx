import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {useTheme} from 'styled-components/native';

import {IIconProps} from './Icon.types';
import {moderateScale, verticalScale} from '@/utils';

export const MoonIcon = ({sizeIcon = 24, color}: IIconProps) => {
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
      <Path
        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
        fill={'transparent'}
      />
    </Svg>
  );
};
