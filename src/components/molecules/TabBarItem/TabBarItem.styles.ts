import styled from 'styled-components/native';
import {moderateScale, verticalScale} from '@/utils';

export const Container = styled.TouchableOpacity`
  width: ${moderateScale(40)}px;
  height: ${verticalScale(50)}px;
  align-items: center;
  justify-content: center;
`;

export const ContainerQuantity = styled.View`
  position: absolute;
  width: ${moderateScale(15)}px;
  height: ${moderateScale(15)}px;
  border-radius: ${moderateScale(7.5)}px;
  background-color: ${({theme}) => theme.colors.secondary};
  right: 0px;
  top: ${verticalScale(5)}px;
  align-items: center;
  justify-content: center;
`;
