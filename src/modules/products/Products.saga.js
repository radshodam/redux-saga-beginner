// ?step 3 create saga
import { takeEvery, all, call, takeLeading } from "redux-saga/effects";
import { getProducts } from "../../utils/api";
import {
  getProductsFailure,
  getProductsSuccess,
  GET_PRODUCTS,
} from "./Products.action";
function* getProductsSaga() {
  try {
      debugger;
      const data = yield call(getProducts);
    yield put(getProductsSuccess(data));
  } catch (error) {
    yield put(getProductsFailure(error.message));
  }
}
function* getProductsWatcher() {
  debugger;

  yield takeEvery(GET_PRODUCTS, getProductsSaga);
}

export default function* productsSaga() {
  yield all([
    getProductsWatcher(),
    //  addProductsWatcher()
  ]);
}
