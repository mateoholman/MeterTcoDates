import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';

import App from '../components/App';
import Header from '../components/Header';

//Test what it renders
//Test state & props the component receives
//Test what the component does when the user interacts with it (via clicking, dragging, keyboard input, etc)

describe('<App />', () => {
  it('renders without crashing', () => {
      mount(<App />);
  });

  it('render the header', () => {

  });

});
