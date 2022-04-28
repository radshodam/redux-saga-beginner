// step 6
import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();
const whithDevTools = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE || compose;

const store = createStore(
  rootReducer,
  whithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
export default store;
