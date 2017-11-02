import { put, call, takeEvery } from 'redux-saga/effects';
import {
  fetchExampleNews,
} from 'reena/src/services/apis';

import {
  fetchExampleNewsLoading,
  fetchExampleNewsSuccess,
  fetchExampleNewsFailure,
} from './actions';
import { FETCH_EXAMPLE_NEWS } from './constants';

export function* fetchExampleNewsSaga() {
  yield put(fetchExampleNewsLoading());
  const newsData = yield call(fetchExampleNews);
  try {
    yield put(fetchExampleNewsSuccess(newsData.data));
  } catch (e) {
    yield put(fetchExampleNewsFailure(e));
  }
}

export function* fetchExampleNewsSagaWatcher() {
  yield takeEvery(FETCH_EXAMPLE_NEWS, fetchExampleNewsSaga);
}
