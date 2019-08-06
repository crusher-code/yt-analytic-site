  import React from 'react';
  import ReactDOM from 'react-dom';
  import MainApp from './mainapp';
  import Enzyme, { mount } from 'enzyme';
  import Adapter from 'enzyme-adapter-react-16';

  Enzyme.configure({ adapter: new Adapter() });

 it('Renders a LEARN welcome', ()=>{
   const MainApp = mount(<MainApp />)
  expect(MainApp.find('h2').text()).toEqual('Hello')
 })