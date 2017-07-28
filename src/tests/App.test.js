import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './components/App';

//Test what it renders
//Test state & props the component receives
//Test what the component does when the user interacts with it (via clicking, dragging, keyboard input, etc)

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should have a header');

  it('should have a footer');

});
