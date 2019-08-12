import React, { Component } from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom'
import Home from './pages/Home'
import Analytics from './pages/Analytics'
import Profile from './pages/Profile'
import AboutUs from './pages/AboutUs'
import { Nav, NavItem,NavLink } from 'reactstrap'

class MainApp extends React.Component {
  render () {
    const{
      logged_in, 
      sign_in_route,
      sign_out_route,
      edit_user_route
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
          <NavLink id="HomepageLink" to="/" tag={Link}>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/profile" href={edit_user_route}>Profile</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/analytics" tag={Link}>Analytics</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/aboutus" tag={Link}>AboutUs</NavLink>
        </NavItem>
      </Nav>
      <Switch> 
        <Route path="/" exact component={Home} /> 
       { /* <Route path="/profile" exact render={( ...props) => <Profile edit_user_route={edit_user_route}/> } /> */}
        <Route path="/analytics" exact component={Analytics} /> 
        <Route path="/aboutus" exact component={AboutUs} /> 
      </Switch>
      </Router>
      </React.Fragment>
      
    );
  }
}

export default MainApp
