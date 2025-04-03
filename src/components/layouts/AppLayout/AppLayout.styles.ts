import styled from 'styled-components/native';
import {moderateScale, verticalScale} from '@/utils';

interface IContainer {
  $topInset: number;
}

export const Container = styled.View<IContainer>`
  flex: 1;
  background-color: ${({theme}) => theme.colors.primary};
  padding-top: ${({$topInset}) =>
    $topInset ? $topInset + verticalScale(10) : verticalScale(16)}px;
`;

export const ContentContainer = styled.View`
  flex: 1;
  padding-left: ${moderateScale(10)}px;
  padding-right: ${moderateScale(10)}px;
  background-color: ${({theme}) => theme.colors.background};
`;
