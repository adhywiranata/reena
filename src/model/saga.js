import { all } from 'redux-saga/effects';

import { fetchExampleNewsSagaWatcher } from './modules/exampleNews/saga';

export default function* rootSaga() {
  yield all([
    fetchExampleNewsSagaWatcher(),
  ]);
}
