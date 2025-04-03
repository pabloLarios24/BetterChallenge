import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {useTheme} from 'styled-components/native';

import {IIconProps} from './Icon.types';
import {moderateScale} from '@/utils';

export const HomeIcon = ({sizeIcon = 24, color}: IIconProps) => {
  const theme = useTheme();
  return (
    <Svg
      width={moderateScale(sizeIcon)}
      height={moderateScale(sizeIcon)}
      viewBox="0 0 24 24"
      fill={'none'}
      stroke={theme.colors[color ?? 'text']}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path
        d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
        fill={'transparent'}
      />
      <Path d="M9 22L9 12 15 12 15 22" fill={'transparent'} />
    </Svg>
  );
};
