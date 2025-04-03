import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {useTheme} from 'styled-components/native';

import {IIconProps} from './Icon.types';
import {moderateScale, verticalScale} from '@/utils';

export const CloseIcon = ({sizeIcon = 24, color}: IIconProps) => {
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
      <Path d="M18 6L6 18" fill={'transparent'} />
      <Path d="M6 6L18 18" fill={'transparent'} />
    </Svg>
  );
};
