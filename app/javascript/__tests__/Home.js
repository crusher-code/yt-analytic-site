  import React from 'react';
  import ReactDOM from 'react-dom';
  // import Home from '../components/Home';
  import Enzyme, { shallow, mount } from 'enzyme';
  import Adapter from 'enzyme-adapter-react-16';
  import { MemoryRouter } from 'react-router';
  import { Route } from 'react-router-dom';
  
  Enzyme.configure({ adapter: new Adapter() });