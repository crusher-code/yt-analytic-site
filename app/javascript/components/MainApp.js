import React, {component} from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom'
import Home from './pages/Home'
import Anayltics from './pages/Anayltics'
import Profile from './pages/Profile'
import AboutUs from './pages/AboutUs'

class MainApp extends React.Component {
  render () {
    return (
      <React.Fragment>
      <Router>
      <Nav>
        <NavItem>
          <NavLink to="/" tag={Link}>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/" tag={Link}>Profile</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/" tag={Link}>Anayltics</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/" tag={Link}>AbouUs</NavLink>
        </NavItem>
      </Nav>
      <Switch> 
        <Route path="/" exact component={Home} /> 
        <Route path="/" exact component={Profile} /> 
        <Route path="/" exact component={Profile} /> 
        <Route path="/" exact component={Profile} /> 
      </Switch>
      </Router> 
      </React.Fragment>
      
    );
  }
}

export default MainApp
