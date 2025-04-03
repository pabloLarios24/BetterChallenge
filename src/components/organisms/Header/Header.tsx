import React from 'react';
import {Container, ContentContainer, IconContainer} from './Header.styles.ts';
import {IconCustom, SearchInput, TextBase} from '@/components';

interface IHeaderProps {
  needBack?: boolean;
  onPressBack?: () => void;
  isInput?: boolean;
  placeholder?: string;
  value?: string;
  title?: string;
  onChangeText?: (value: string) => void;
  onPressDelete?: () => void;
}

export const Header = ({
  needBack,
  onPressBack,
  isInput,
  placeholder,
  value,
  title,
  onChangeText,
  onPressDelete,
}: IHeaderProps) => {
  return (
    <Container>
      {needBack && onPressBack && (
        <IconContainer onPress={onPressBack}>
          <IconCustom sizeIcon={20} name={'arrowLeft'} color={'textButton'} />
        </IconContainer>
      )}
      <ContentContainer $needBack={!!needBack}>
        {isInput && onChangeText && onPressDelete ? (
          <SearchInput
            onChangeText={onChangeText}
            value={value ?? ''}
            placeholder={placeholder ?? ''}
            onPressDelete={onPressDelete}
          />
        ) : (
          <TextBase textType={'h1'} text={title ?? ''} isButton />
        )}
      </ContentContainer>
    </Container>
  );
};
