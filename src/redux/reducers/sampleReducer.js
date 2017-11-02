// Place initial state here
const initialState = {
  message: 'REE.NA',
  description: 'Simple React Native Framework',
};

// Place additonal reducer logics here
const setMessage = (oldState, payload) => ({ ...oldState, message: payload });

// Place reducer main function here
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_MESSAGE': return setMessage(state, payload);
    default: return state;
  }
};

// Place selectors here
export const getMessageSelector = state => state.message;
