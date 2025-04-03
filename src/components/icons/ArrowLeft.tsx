import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {useTheme} from 'styled-components/native';

import {IIconProps} from './Icon.types';
import {moderateScale, verticalScale} from '@/utils';

export const ArrowLeftIcon = ({size = 24, color}: IIconProps) => {
  const theme = useTheme();
  return (
    <Svg
      width={moderateScale(size)}
      height={verticalScale(size)}
      viewBox="0 0 24 24"
      fill="none"
      stroke={theme.colors[color ?? 'text']}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M19 12L5 12" fill={'transparent'} />
      <Path d="M12 19L5 12 12 5" fill={'transparent'} />
    </Svg>
  );
};
