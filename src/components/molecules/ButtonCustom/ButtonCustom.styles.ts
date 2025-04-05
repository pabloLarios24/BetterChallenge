import styled from 'styled-components/native';
import {moderateScale} from '@/utils';

export const StyledViewButton = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${moderateScale(5)}px;
`;
