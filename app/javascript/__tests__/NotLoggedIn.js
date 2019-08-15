  import React from 'react';
  import ReactDOM from 'react-dom';
  import MainApp from '../components/MainApp';
  import Enzyme, { shallow, mount } from 'enzyme';
  import Adapter from 'enzyme-adapter-react-16';
  import { MemoryRouter } from 'react-router';
  import { Route } from 'react-router-dom';
  import NotLoggedIn from '../components/pages/NotLoggedIn'
  
  Enzyme.configure({ adapter: new Adapter() });

 describe("test notLoggedIn", () => {
  it ("returns rendered not looged in component ", () => {
    const notLoggedIn = mount(<NotLoggedIn />)
  })
 })
 
   describe("test notLoggedIn", () => {
    it ("returns a string that says You are not logged in, please log in to view this page.", () => {
        const notLoggedIn = mount(<NotLoggedIn />)
        expect(notLoggedIn.find('h2').text()).toEqual("You are not logged in, please log in to view this page.")
    })
})