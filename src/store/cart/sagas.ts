import {delay, put, takeLatest} from 'redux-saga/effects';
import {
  ADD_TO_CART_REQUEST,
  DECREMENT_QUANTITY_REQUEST,
  IAddToCartSuccessAction,
  IDecrementCartSuccessAction,
  IIncrementCartSuccessAction,
  INCREMENT_QUANTITY_REQUEST,
  IRemoveFromCartSuccessAction,
  REMOVE_FROM_CART_REQUEST,
} from './types';
import {addToast, hideLoading, showLoading} from '../appState/actions';
import {TEXTS} from '@/constants';
import {
  addToCartSuccess,
  decrementCartSuccess,
  incrementCartSuccess,
  removeFromCartSuccess,
} from '@/store/cart/actions.ts';

function* handleAddToCart(action: IAddToCartSuccessAction) {
  console.log('handleAddToCart', action.payload);
  try {
    yield put(showLoading());
    yield delay(500);
    yield put(addToCartSuccess(action.payload));

    yield put(
      addToast({
        id: Date.now().toString(),
        type: 'success',
        message: TEXTS.messages.cartAdded,
      }),
    );
  } finally {
    yield put(hideLoading());
  }
}

function* handleIncrementQuantity(action: IIncrementCartSuccessAction) {
  try {
    yield put(showLoading());
    yield delay(300);
    yield put(incrementCartSuccess(action.payload));
  } finally {
    yield put(hideLoading());
  }
}

function* handleDecrementQuantity(action: IDecrementCartSuccessAction) {
  try {
    yield put(showLoading());
    yield delay(300);
    yield put(decrementCartSuccess(action.payload));
  } finally {
    yield put(hideLoading());
  }
}

function* handleRemoveFromCart(action: IRemoveFromCartSuccessAction) {
  try {
    yield put(showLoading());
    yield delay(300);
    yield put(removeFromCartSuccess(action.payload));
  } finally {
    yield put(hideLoading());
  }
}

export function* watchCartSagas() {
  yield takeLatest(ADD_TO_CART_REQUEST, handleAddToCart);
  yield takeLatest(INCREMENT_QUANTITY_REQUEST, handleIncrementQuantity);
  yield takeLatest(DECREMENT_QUANTITY_REQUEST, handleDecrementQuantity);
  yield takeLatest(REMOVE_FROM_CART_REQUEST, handleRemoveFromCart);
}
