import styled from 'styled-components/native';
import {moderateScale} from '@/utils';

export const CardContainer = styled.View`
  width: 98%;
  height: ${moderateScale(150)}px;
  flex-direction: row;
  border-radius: ${moderateScale(10)}px;
  border-color: ${({theme}) => theme.colors.border};
  border-width: 1px;
`;

export const ImageContainer = styled.View`
  width: 40%;
  height: 100%;
`;

export const DescriptionContainer = styled.View`
  width: 60%;
  height: 100%;
  padding: ${moderateScale(10)}px;
  align-items: flex-start;
  gap: ${moderateScale(5)}px;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  height: ${moderateScale(40)}px;
`;
