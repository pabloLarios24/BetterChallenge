import {delay, put, takeEvery} from 'redux-saga/effects';
import {ADD_TOAST, IAddToast} from './types';
import {removeToast} from '@/store/appState/actions.ts';

function* handleToastExpire(action: IAddToast) {
  yield delay(3500);
  yield put(removeToast(action.payload.id));
}

export default function* toastSaga() {
  yield takeEvery(ADD_TOAST, handleToastExpire);
}
