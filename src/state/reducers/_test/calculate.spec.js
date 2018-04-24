import * as ActionTypes from '../../constants/action-types';
import calculateReducer from '../calculate';
import initialState from '../initial-state';
import _ from 'lodash';

describe('Timeout Reducer Unit Tests', () => {

  const initialStateClone = _.cloneDeep(initialState);

  it('set initial state by default', () => {
    const action = { type: 'UNKNOWN' };

    expect(calculateReducer(initialState, action)).toEqual(initialState);
    expect(initialState).toEqual(initialStateClone);
  });

  it('handle calculate dogs action', () => {
    const action = {
        type: ActionTypes.CALCULATE_DOGS,
        input: "bark"
    };

    const expected = _.cloneDeep(initialState);
    expected.dogs = 1;
    expected.history = [{"input": "bark", "number": 1, "timeStamp": 1524502767528}];

    expect(calculateReducer(initialState, action).dogs).toEqual(expected.dogs);
    expect(calculateReducer(initialState, action).history.length).toEqual(expected.history.length);
    expect(initialState).toEqual(initialStateClone);
  });

});