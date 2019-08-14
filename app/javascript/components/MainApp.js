import React, { Component } from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Link,Switch, Container } from 'react-router-dom'
import Home from './pages/Home'
import Analytics from './pages/Analytics'
import Profile from './pages/Profile'
import AboutUs from './pages/AboutUs'
import { Nav, NavItem,NavLink, NavBar } from 'reactstrap'


class MainApp extends React.Component {
  render () {
    const{
      logged_in, 
      sign_in_route,
      sign_out_route,
      edit_user_route
    }= this.props
    return (
       <div style={{backgroundColor: "#b32615"}}>
      <Router>
      <Nav>
        <NavItem>
          <NavLink id="HomepageLink"  to="/" style={{color: 'white', textDecoration: 'none'}}  tag={Link}>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/profile"style={{color: 'white', textDecoration: 'none'}}  href={edit_user_route}>Profile</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/analytics" style={{color: 'white', textDecoration: 'none'}}  tag={Link}>Analytics</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/aboutus" style={{color: 'white', textDecoration: 'none'}}  tag={Link}>AboutUs</NavLink>
        </NavItem>
        
        <div className="navlink-nav ml-auto">  
        
        {logged_in&&
        
          <NavItem >
            <NavLink  href = {sign_out_route}>Sign Out</NavLink>
          </NavItem>
        }
        {!logged_in && 
          <NavItem>
            <NavLink href={sign_in_route}>Sign In</NavLink>
          </NavItem>
        }
       
        </div>
        
      </Nav>
      <Switch> 
        <Router path="/" exact component={Home} /> 
       { /* <Route path="/profile" exact render={( ...props) => <Profile edit_user_route={edit_user_route}/> } /> */}
        <Route path="/analytics" exact component={Analytics} /> 
        <Route path="/aboutus" exact component={AboutUs} /> 
      </Switch>
      </Router>
      
      </div>
      
    );
  }
}

export default MainApp
