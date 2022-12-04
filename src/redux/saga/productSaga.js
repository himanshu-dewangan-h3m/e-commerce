import { takeEvery } from 'redux-saga/effects';
import { PRODUCT_LIST } from '../constant';

// Worker Saga
function* getProducts() {
  try {
    console.warn("get product saga called");
    let data = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.warn('Add to cart action is called',data);
  }
  catch(err) {
    console.log('Error: ', err)
  }
}

// Watcher Saga
function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts)
}

export default productSaga;