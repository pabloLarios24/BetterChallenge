import styled from 'styled-components/native';
import {moderateScale, verticalScale} from '@/utils';

export const Container = styled.View`
  flex-direction: row;
  width: 98%;
  height: ${verticalScale(50)};
  align-items: center;
  justify-content: center;
  gap: ${moderateScale(20)};
  padding: ${verticalScale(5)}px ${moderateScale(10)}px ${moderateScale(10)}px
    ${verticalScale(5)}px;
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: ${moderateScale(10)}px;
`;
