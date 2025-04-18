import React, {useEffect} from 'react';
import {Container, ContentContainer} from './AppLayout.styles.ts';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Header, IHeaderProps} from '@/components';
import Spinner from 'react-native-loading-spinner-overlay';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@/store';
import Toast from 'react-native-toast-message';
import {Dispatch} from 'redux';
import {AppActionTypes} from '@/store/appState/types.ts';

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
  onEndEditing,
}: IAppLayoutProps) => {
  const insets = useSafeAreaInsets();
  const {loading, toasts} = useSelector((state: RootState) => state.appState);
  const dispatch = useDispatch<Dispatch<AppActionTypes>>();

  useEffect(() => {
    if (toasts.length > 0) {
      const toast = toasts[toasts.length - 1];
      Toast.show({
        type: toast.type,
        text1: toast.message,
        position: 'top',
        visibilityTime: 3000,
      });
    }
  }, [toasts, dispatch]);
  return (
    <Container $topInset={insets.top}>
      <Spinner visible={loading} />
      <Header
        isInput={isInput}
        onPressBack={onPressBack}
        onPressDelete={onPressDelete}
        placeholder={placeholder}
        value={value}
        title={title}
        onChangeText={onChangeText}
        needBack={needBack}
        onEndEditing={onEndEditing}
      />
      <ContentContainer>{children}</ContentContainer>
    </Container>
  );
};
