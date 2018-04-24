import React from 'react';
import Link from '../calculate';
import renderer from 'react-test-renderer';
import * as types from '../../constants/action-types';
import * as actionCreators from '../calculate';

it('creates a calculate dogs request', () => {
    const input = "bark";
    const expected = {
      type: types.CALCULATE_DOGS,
      input
    };
    expect(actionCreators.calculateDogsRequest(input)).toEqual(expected);
});