import calculateDogsReducer from './calculate';
import initialState from './initial-state';

const rootReducer = (state = initialState, action) => {
    return calculateDogsReducer(state, action);
  };
  export default rootReducer;