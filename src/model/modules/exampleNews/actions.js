import {
  FETCH_EXAMPLE_NEWS_LOADING,
  FETCH_EXAMPLE_NEWS_SUCCESS,
  FETCH_EXAMPLE_NEWS_FAILURE,
} from './constants';

export const fetchExampleNewsLoading = () => ({ type: FETCH_EXAMPLE_NEWS_LOADING });
export const fetchExampleNewsSuccess = payload => ({ type: FETCH_EXAMPLE_NEWS_SUCCESS, payload });
export const fetchExampleNewsFailure = payload => ({ type: FETCH_EXAMPLE_NEWS_FAILURE, payload });
