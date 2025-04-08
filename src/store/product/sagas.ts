import {call, put, takeLatest} from 'redux-saga/effects';
import {fetchProductsSuccess} from './actions';
import {FETCH_PRODUCTS_REQUEST} from './types';
import {getProducts} from '@/services/product.service';
import {IProduct} from '@/types';
import {addToast, hideLoading, showLoading} from '@/store/appState/actions.ts';
import {TEXTS} from '@/constants';

function* fetchProductsSaga(): Generator<any, void, IProduct[]> {
  try {
    yield put(showLoading());
    const products = yield call(getProducts);
    yield put(fetchProductsSuccess(products));
  } catch (error: any) {
    yield put(
      addToast({
        id: Date.now().toString(),
        type: 'error',
        message: TEXTS.messages.cantLoadedProducts,
      }),
    );
  } finally {
    yield put(hideLoading());
  }
}

export function* watchProductSagas() {
  yield takeLatest(FETCH_PRODUCTS_REQUEST, fetchProductsSaga);
}
