// step 5
// export default function* () {
//   console.log('I am redux-saga');
// }
import { all } from "redux-saga/effects";
import productsSaga from "../modules/products/Products.saga";
export default function* () {
  yield all([productsSaga()]);
}
