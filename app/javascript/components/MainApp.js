import React, { Component } from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom'
import Home from './pages/Home'
import Analytics from './pages/Analytics'
import Profile from './pages/Profile'
import AboutUs from './pages/AboutUs'
import NewChannel from './pages/NewChannel'
import Login from './pages/Login'
import { Nav, NavItem,NavLink } from 'reactstrap'
import axios from 'axios'

class MainApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      channels: []
    }
    this.getChannels()
  }
  
  getChannels = () => {
    fetch("/channels")
    .then( response => {
      return response.json()
    })
    .then( channels => {
      this.setState({channels})
    })
  }
  
  createChannel = (attrs) => {
    return fetch("/channels",{
      method: 'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({channel: attrs})
    })
    .then(response => {
      if(response.status === 201){
        this.getChannels()
      }
    })
  }

  handleLogin = (e) => {
      e.preventDefault()
      console.log("sign in ran")
      let that = this
      axios.post('/users/sign_in', {
          user: {
              email: document.getElementById('email').value,
              password: document.getElementById('password').value
            }
          })
          .then(function(resp) {
              that.props.updateCurrentUser(email)
          })
          .catch(function(error){
              console.log(error)
          })
  }
  
  render () {
    const{
      logged_in, 
      sign_in_route,
      sign_out_route,
      channels_route,
      edit_user_route,
      apiKey

    }= this.props
    console.log(logged_in)
    return (
      

      <React.Fragment>
      <header>
        <h2>Hello</h2>
      </header>
      <Router>
      <Nav>
        <NavItem>
          {logged_in&& 
            <NavLink to='/' href={sign_out_route}>Sign Out</NavLink>
          }
          {!logged_in &&
            <NavLink to='/Login' tag={Link}>Sign In</NavLink>
          }
        </NavItem>
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
        <NavItem>
          <NavLink to="/newchannel" tag={Link}>NewChannel</NavLink>
        </NavItem>
      </Nav>
      
      
      
      
      
      <Switch> 
        <Route path="/" exact component={Home} /> 
       { /* <Route path="/profile" exact render={( ...props) => <Profile edit_user_route={edit_user_route}/> } /> */}
        <Route path="/analytics" render={(props) => {return ( <Analytics {...props} apiKey={apiKey} /> )}} />
        <Route path="/aboutus" exact component={AboutUs} /> 
       {/* <Route path="/newchannel" exact component={NewChannel} /> */}
        <Route path="/newchannel" render={(props) => { return ( <NewChannel {...props} onSubmit={this.createChannel} /> ) }} />
        <Route path="/Login" render={(props) => { return (<Login {...props} onSubmit={this.handleLogin}/> ) }}/>
      </Switch>
      </Router>
      </React.Fragment>
      
    );
  }
}

export default MainApp