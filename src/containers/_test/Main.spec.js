import React from 'react';
import { shallow } from 'enzyme';
import Main from '../Main';


describe('<Main>', () => {
  it('should render main part', () => {
    const main = shallow(<Main/>);
    expect(main.find('Link').length).toEqual(2);
  });
});