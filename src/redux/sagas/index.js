import { all } from 'redux-saga/effects';

import { fetchExampleNewsSagaWatcher } from './exampleSaga';

export default function* rootSaga() {
  yield all([
    fetchExampleNewsSagaWatcher(),
  ]);
}
