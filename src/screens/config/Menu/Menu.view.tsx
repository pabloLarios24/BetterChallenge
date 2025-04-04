import React from 'react';
import {AppLayout, ButtonCustom} from '@/components';
import {Container} from '@/screens/config/Menu/Menu.styles.ts';

interface IMenuViewProps {
  isLight: boolean;
  handleToggleTheme: () => void;
}

const MenuView: React.FC<IMenuViewProps> = ({isLight, handleToggleTheme}) => {
  return (
    <AppLayout title={'Menu'}>
      <Container>
        <ButtonCustom
          size={'large'}
          type={'primary'}
          text={isLight ? 'Dark Theme' : 'Light Theme'}
          textType={'h3'}
          bold
          name={isLight ? 'moon' : 'sun'}
          onPress={handleToggleTheme}
        />
      </Container>
    </AppLayout>
  );
};

export default MenuView;
