import styled from 'styled-components/native';
import {moderateScale, verticalScale} from '@/utils';

interface IContainer {
  $bottomInset: number;
}

export const ContainerTabBar = styled.View`
  flex-direction: row;
  width: 98%;
  height: ${verticalScale(45)};
  align-items: center;
  justify-content: center;
  gap: ${moderateScale(20)};
  padding: ${verticalScale(5)}px ${moderateScale(10)}px ${moderateScale(10)}px
    ${verticalScale(5)}px;
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: ${moderateScale(10)}px;
`;

export const Container = styled.View<IContainer>`
  width: 100%;
  align-items: center;
  padding-bottom: ${({$bottomInset}) =>
    $bottomInset ? $bottomInset + verticalScale(10) : verticalScale(16)}px;
  background-color: ${({theme}) => theme.colors.background};
`;
