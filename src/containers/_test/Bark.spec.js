import React from 'react';
import { shallow } from 'enzyme';
import { UnboundBark as Bark } from '../Bark';


describe('<Bark>', () => {
  it('should render bark part', () => {
    const bark = shallow(<Bark/>);
    expect(bark.find('input').length).toEqual(2);
  });
});