import React, {component} from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom'
import Home from './pages/Home'
import Anayltics from './pages/Analytics'
import Profile from './pages/Profile'
import AboutUs from './pages/AboutUs'

class MainApp extends React.Component {
  render () {
    const{
      logged_in, 
      sign_in_route,
      sign_out_route
    }= this.props
    return (
      

      <React.Fragment>
      <header>
        <h2>Hello</h2>
      </header>
      {logged_in&& 
        <div>
          <a href = {sign_out_route}>Sign Out</a>
        </div>
      }
      {!logged_in && 
        <div>
          <a href={sign_in_route}>Sign In</a>
        </div>
      }

      <Router>
      <Nav>
        <NavItem>
          <NavLink to="/" tag={Link}>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/" tag={Link}>Profile</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/" tag={Link}>Analytics</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/" tag={Link}>AboutUs</NavLink>
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
