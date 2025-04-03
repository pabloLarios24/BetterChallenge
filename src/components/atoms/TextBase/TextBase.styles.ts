import styled from 'styled-components/native';
import {TextBaseType} from './TextBase.types';
import {moderateScale} from '@/utils';

interface IStyledTextBaseProps {
  $type: TextBaseType;
  $bold?: boolean;
  $italic?: boolean;
  $isButton?: boolean;
}

const sizeByType = {
  h1: 18,
  h2: 16,
  h3: 14,
  h4: 12,
  h5: 10,
  h6: 8,
  p: 14,
};

export const StyledTextBase = styled.Text<IStyledTextBaseProps>`
  color: ${({theme, $isButton}) =>
    theme.colors[$isButton ? 'textButton' : 'text']};
  font-size: ${({$type}) => moderateScale(sizeByType[$type])}px;
  font-weight: ${({$bold}) => ($bold ? '700' : 'normal')};
  font-style: ${({$italic}) => ($italic ? 'italic' : 'normal')};
`;
