  import React from 'react';
  import ReactDOM from 'react-dom';
  import NewChannel from '../components/pages/NewChannel'
  import Enzyme, { shallow, mount } from 'enzyme';
  import Adapter from 'enzyme-adapter-react-16';
  import { MemoryRouter } from 'react-router';
  import { Route } from 'react-router-dom';
  
  Enzyme.configure({ adapter: new Adapter() });
  
   describe("test newChannel", () => {
  it ("returns rendered new channel component", () => {
    // expect(mainapp.find('h2').text()).toEqual('Hello')
    const newChannel = mount(<NewChannel />)
    // expect(hello()).toBe("hi")
  })
 })