import {delay, put, takeEvery} from 'redux-saga/effects';
import {ADD_TOAST, IAddToast, REMOVE_TOAST} from './types';

function* handleToastExpire(action: IAddToast) {
  yield delay(5000);
  yield put({type: REMOVE_TOAST, payload: action.payload.id});
}

export default function* toastSaga() {
  yield takeEvery(ADD_TOAST, handleToastExpire);
}
