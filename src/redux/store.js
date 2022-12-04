// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import rootReducer from "./reducers/rootReducer";
import productSaga from "./saga/productSaga";


// const store = createStore(rootReducer);
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware]
});

function* rootSaga() {
  yield all([
    productSaga(), 
  ]);
}


sagaMiddleware.run(rootSaga)

export default store;