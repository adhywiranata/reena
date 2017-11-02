import {
  FETCH_EXAMPLE_NEWS_LOADING,
  FETCH_EXAMPLE_NEWS_SUCCESS,
  FETCH_EXAMPLE_NEWS_FAILURE,
} from './constants';

// Place initial state here
const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  errorMessage: null,
};

// Place additonal reducer logics here
const startLoading = oldState => ({ ...oldState, isLoading: true });
const setDataOnSuccess = (oldState, payload) => (
  {
    ...oldState,
    isLoading: false,
    data: payload.hits,
  }
);
const setDataOnFailure = (oldState, payload) => (
  {
    ...oldState,
    isLoading: false,
    isError: true,
    errorMessage: payload,
  }
);

// Place reducer main function here
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_EXAMPLE_NEWS_LOADING: return startLoading(state);
    case FETCH_EXAMPLE_NEWS_SUCCESS: return setDataOnSuccess(state, payload);
    case FETCH_EXAMPLE_NEWS_FAILURE: return setDataOnFailure(state, payload);
    default: return state;
  }
};
