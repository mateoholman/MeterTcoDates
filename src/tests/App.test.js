import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './components/App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});
