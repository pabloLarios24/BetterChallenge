import React from 'react';
import {
  Container,
  IconContainer,
  InputContainer,
  StyledInput,
} from '@/components/molecules/SearchInput/SearchInput.styles.ts';
import {IconCustom} from '@/components';
import {useTheme} from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

interface ISearchInputProps {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  onPressDelete: () => void;
  onEndEditing: () => void;
}

export const SearchInput = ({
  value,
  placeholder,
  onChangeText,
  onPressDelete,
  onEndEditing,
}: ISearchInputProps) => {
  const theme = useTheme();
  return (
    <Container>
      <IconContainer>
        <IconCustom name={'search'} sizeIcon={20} color={'text'} />
      </IconContainer>
      <InputContainer>
        <StyledInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          maxLength={50}
          numberOfLines={1}
          placeholderTextColor={theme.colors.border}
          onEndEditing={onEndEditing}
        />
      </InputContainer>
      <IconContainer>
        <TouchableOpacity onPress={onPressDelete}>
          <IconCustom name={'close'} sizeIcon={20} color={'text'} />
        </TouchableOpacity>
      </IconContainer>
    </Container>
  );
};
