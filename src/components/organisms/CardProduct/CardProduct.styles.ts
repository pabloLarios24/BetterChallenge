import styled from 'styled-components/native';
import {moderateScale, verticalScale} from '@/utils';

export const CardContainer = styled.TouchableOpacity`
  width: 95%;
  height: ${moderateScale(170)}px;
  flex-direction: row;
  border-radius: ${moderateScale(10)}px;
  border-color: ${({theme}) => theme.colors.border};
  border-width: 1px;
  margin-bottom: ${moderateScale(10)}px;
  padding: ${verticalScale(10)}px;
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
