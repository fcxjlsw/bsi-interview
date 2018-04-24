import React from 'react';
import { shallow } from 'enzyme';
import { UnboundHistory as History } from '../History';


describe('<History>', () => {
    const props = {
        history: [{"input":"bark","number":1,"timeStamp":1241525}]
      };
  it('should render history table', () => {
    const history = shallow(<History {...props}/>);
    expect(history.find('.header').length).toEqual(1);
    expect(history.find('Row').length).toEqual(1);
  });
});