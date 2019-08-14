import React, { Component } from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom'
import Home from './pages/Home'
import Analytics from './pages/Analytics'
import Profile from './pages/Profile'
import AboutUs from './pages/AboutUs'
import NewChannel from './pages/NewChannel'
import { Nav, NavItem,NavLink } from 'reactstrap'

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
  
  render () {
    const{
      logged_in, 
      sign_in_route,
      sign_out_route,
      channels_route,
      edit_user_route,
      apiKey

    }= this.props
    console.log(apiKey)
    return (
      

      <React.Fragment>
      <header>
        <h2>Hello</h2>
      </header>
      {logged_in &&
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
      </Switch>
      </Router>
      </React.Fragment>
      
    );
  }
}

export default MainApp