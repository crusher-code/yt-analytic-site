  import React from 'react';
  import ReactDOM from 'react-dom';
  import MainApp from '../../MainApp';
  import Enzyme, { mount,shallow } from 'enzyme';
  import Adapter from 'enzyme-adapter-react-16';

  Enzyme.configure({ adapter: new Adapter() });

 it('Renders a LEARN welcome', ()=>{
   const mainapp = mount(<MainApp />)
  expect(mainapp.find('h2').text()).toEqual('Hello')
 })
 
 it ('links to home', ()=>{ 
 const mainapp = shallow(<MainApp />)
 mainapp.find('#HomepageLink').simulate('click') 
 
// expect(mainapp.find('#HomepageLink-NavLink').text()).toEqual('./Home')
 })
 