import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProviderWrapper} from './src/theme/Theme.context';
import NavContainer from './src/navigation/NavContainer';
import {SafeAreaView} from 'react-native';
import {persistor, store} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProviderWrapper>
            <NavContainer />
            <Toast />
          </ThemeProviderWrapper>
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
