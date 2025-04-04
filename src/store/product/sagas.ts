import {call, put, takeLatest} from 'redux-saga/effects';
import {fetchProductsFailure, fetchProductsSuccess} from './actions';
import {FETCH_PRODUCTS_REQUEST} from './types';
import {getProducts} from '@/services/product.service';
import {Product} from '@/types';
import {addToast} from '@/store/toast/actions.ts';

function* fetchProductsSaga(): Generator<any, void, Product[]> {
  try {
    const products = yield call(getProducts);
    yield put(fetchProductsSuccess(products));
  } catch (error: any) {
    yield put(fetchProductsFailure(error.message));
    yield put(
      addToast({
        id: Date.now().toString(),
        type: 'error',
        message: 'Error al cargar los productos',
      }),
    );
  }
}

export function* watchProductSagas() {
  yield takeLatest(FETCH_PRODUCTS_REQUEST, fetchProductsSaga);
}
