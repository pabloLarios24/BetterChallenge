import {all, fork} from 'redux-saga/effects';
import {watchProductSagas} from './product/sagas';
import toastSaga from '@/store/appState/sagas.ts';
import {watchCartSagas} from '@/store/cart/sagas.ts';

export default function* rootSaga() {
  yield all([fork(watchProductSagas), fork(toastSaga), fork(watchCartSagas)]);
}
