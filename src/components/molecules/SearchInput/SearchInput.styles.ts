import styled from 'styled-components/native';
import {moderateScale, verticalScale} from '@/utils';
import {sizeByType} from '@/components';

export const Container = styled.View`
  width: 100%;
  height: ${verticalScale(35)};
  border-color: ${({theme}) => theme.colors.border};
  border-width: 1px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.background};
`;

export const IconContainer = styled.View`
  width: 10%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
export const InputContainer = styled.View`
  width: 80%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const StyledInput = styled.TextInput`
  width: 100%;
  color: ${({theme}) => theme.colors.text};
  font-size: ${moderateScale(sizeByType.h4)};
`;
