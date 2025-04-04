import styled from 'styled-components/native';
import {verticalScale} from '@/utils';

export const ContainerImage = styled.View`
  width: 90%;
  height: ${verticalScale(150)};
`;

export const Row = styled.View`
  margin-top: ${verticalScale(10)};
`;
