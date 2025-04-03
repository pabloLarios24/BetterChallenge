import styled from 'styled-components/native';
import {verticalScale} from '@/utils';

export const Container = styled.View`
  width: 100%;
  padding: ${verticalScale(10)}px 0px ${verticalScale(10)}px 0px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.border};
  gap: ${verticalScale(10)}px;
`;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  align-items: center;
`;
