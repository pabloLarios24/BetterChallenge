import React from 'react';
import {Container, ContentContainer} from './AppLayout.styles.ts';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Header, IHeaderProps} from '@/components';

interface IAppLayoutProps extends IHeaderProps {
  children: React.ReactNode;
}

export const AppLayout = ({
  children,
  isInput,
  placeholder,
  value,
  title,
  onChangeText,
  onPressDelete,
  onPressBack,
  needBack,
}: IAppLayoutProps) => {
  const insets = useSafeAreaInsets();
  return (
    <Container $topInset={insets.top}>
      <Header
        isInput={isInput}
        onPressBack={onPressBack}
        onPressDelete={onPressDelete}
        placeholder={placeholder}
        value={value}
        title={title}
        onChangeText={onChangeText}
        needBack={needBack}
      />
      <ContentContainer>{children}</ContentContainer>
    </Container>
  );
};
