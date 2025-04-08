import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';

import {productReducer} from './product/reducer';
import RootSaga from './RootSaga.ts';
import {cartReducer} from './cart/reducer.ts';
import {appStateReducer} from '@/store/appState/reducer.ts';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
  appState: appStateReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),
);
export const persistor = persistStore(store);

sagaMiddleware.run(RootSaga);
