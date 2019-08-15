  import React from 'react';
  import ReactDOM from 'react-dom';
  import MainApp from '../components/MainApp';
  import Enzyme, { shallow, mount } from 'enzyme';
  import Adapter from 'enzyme-adapter-react-16';
  import { MemoryRouter } from 'react-router';
  import { Route } from 'react-router-dom';
  import Profile from '../components/pages/Profile'
  
  Enzyme.configure({ adapter: new Adapter() });

 describe("test profile", () => {
  it ("returns rendered profile component", () => {
    // expect(mainapp.find('h2').text()).toEqual('Hello')
    const profile = mount(<Profile />)
    // expect(hello()).toBe("hi")
  })
 })
 
   describe("test profile", () => {
    it ("returns a string that says Profile", () => {
        const profile = mount(<Profile />)
        expect(profile.find('h1').text()).toEqual("Profile")
    })
})
 
// expect(component.find('h1').text()).toEqual('Moin, Moin!');

//  describe("hello", () => {
//     it ("returns a string that says hi", () => {
//         expect(hello()).toBe("hi")
//     })
// })



// const hello = () => {
//     return "hi"
// }
