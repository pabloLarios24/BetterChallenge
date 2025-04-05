import styled from 'styled-components/native';
import {moderateScale} from '@/utils';

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: ${moderateScale(5)}px;
  border-color: ${({theme}) => theme.colors.border};
  border-width: 1px;
  align-self: flex-start;
  align-items: stretch;
  border-radius: 5px;
  height: ${moderateScale(40)}px;
`;

export const ContainerText = styled.View`
  width: ${moderateScale(60)}px;
  height: ${moderateScale(40)}px;
  align-items: center;
  justify-content: center;
`;
