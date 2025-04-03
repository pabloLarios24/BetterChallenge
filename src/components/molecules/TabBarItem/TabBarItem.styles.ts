import styled from 'styled-components/native';
import {moderateScale, verticalScale} from '@/utils';

export const Container = styled.TouchableOpacity`
  width: ${moderateScale(40)};
  height: ${verticalScale(50)};
  align-items: center;
  justify-content: center;
`;
