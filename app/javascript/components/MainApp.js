import React, { Component } from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Link,Switch, Container } from 'react-router-dom'
import Home from './pages/Home'
import Analytics from './pages/Analytics'
import Profile from './pages/Profile'
import AboutUs from './pages/AboutUs'
import NewChannel from './pages/NewChannel'
import NotLoggedIn from './pages/NotLoggedIn'
import { Nav, NavItem,NavLink, NavBar } from 'reactstrap'


class MainApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      channels: null,
      channel: null,
      id_channel: null
    }
    this.getChannels()
  }
  
  getChannels = () => {
    fetch("/channels")
    .then( response => {
      return response.json()
    })
    .then( channels => {
      let id_channel
      if(channels.length === 0){
        id_channel = null
      }else{
        id_channel = channels[0].id
      }
      this.setState({channels, id_channel})
      // this.setState({channels})
    })
  }
  
  getChannel = (id) => {
    fetch(`/channels/${id}`)
    .then( response => {
      return response.json()
    })
    .then( channel => {
      this.setState({channel})
    })
  }
  
  deleteChannel = (id) => {
    return fetch(`/channels/${id}`,{
      method: 'DELETE'
    })
    .then( response => {
      if(response.status === 200){
        this.getChannels()
      }
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
reloadPage = (id) => {
    window.location.href = `/analytics/${id}`
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
    const { channels } = this.state
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
          <NavLink to={`/analytics/${this.state.id_channel}`} style={{color: 'white', textDecoration: 'none'}}  tag={Link}>Analytics</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/aboutus" style={{color: 'white', textDecoration: 'none'}}  tag={Link}>AboutUs</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/newchannel" tag={Link}>NewChannel</NavLink>
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
        <Route path="/" exact render={(props) => { return ( <Home {...props} channels={channels} logged_in={logged_in} deleteChannel={this.deleteChannel} /> )}} /> 
       { /* <Route   path="/profile" exact render={( ...props) => <Profile edit_user_route={edit_user_route}/> } /> */}
        <Route path="/aboutus" exact component={AboutUs} /> 
       {/* <Route path="/newchannel" exact component={NewChannel} /> */}
       {logged_in &&
        <div>
        {channels &&
          <Route path="/analytics/:id" render={(props) => {return ( <Analytics {...props} apiKey={apiKey} channels={channels} reloadPage={this.reloadPage} /> )}} />
        }
        </div>
       }
       {logged_in &&
          <Route path="/newchannel" render={(props) => { return ( <NewChannel {...props} onSubmit={this.createChannel} /> ) }} />
       }
       {!logged_in &&
          <Route path="/analytics" exact component={NotLoggedIn} />
       }
       {!logged_in &&
          <Route path="/newchannel" exact component={NotLoggedIn} />
       }
      </Switch>
      </Router>
      </div>
      </React.Fragment>
      
    );
  }
}

export default MainApp