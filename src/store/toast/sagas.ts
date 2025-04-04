// store/toast/sagas.ts
import {delay, put, takeEvery} from 'redux-saga/effects';
import {ADD_TOAST, REMOVE_TOAST, Toast} from './types';

interface AddToastAction {
  type: typeof ADD_TOAST;
  payload: Toast;
}

function* handleToastExpire(action: AddToastAction) {
  yield delay(5000);
  yield put({type: REMOVE_TOAST, payload: action.payload.id});
}

export default function* toastSaga() {
  yield takeEvery(ADD_TOAST, handleToastExpire);
}
