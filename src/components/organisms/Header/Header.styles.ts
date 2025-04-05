import styled from 'styled-components/native';
import {moderateScale, verticalScale} from '@/utils';

export interface IContainerProps {
  $needBack: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: ${verticalScale(50)}px;
  flex-direction: row;
  padding: ${verticalScale(5)}px ${moderateScale(5)}px ${moderateScale(5)}px
    ${verticalScale(5)}px;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const IconContainer = styled.TouchableOpacity`
  width: 10%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.View<IContainerProps>`
  width: ${({$needBack}) => ($needBack ? '90%' : '100%')}px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
