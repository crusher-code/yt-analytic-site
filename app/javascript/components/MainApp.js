import React, { Component } from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom'
import Home from './pages/Home'
import Analytics from './pages/Analytics'
import Profile from './pages/Profile'
import AboutUs from './pages/AboutUs'
import NewChannel from './pages/NewChannel'
import NotLoggedIn from './pages/NotLoggedIn'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

class MainApp extends React.Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
      channels: null,
      channel: null,
      id_channel: null
    };
    this.getChannels()
  }
   toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
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
// reloadPage = (id) => {
//     window.location.href = `/analytics/${id}`
//   }

  render () {
    const{
      logged_in,
      sign_in_route,
      sign_up_route,
      sign_out_route,
      channels_route,
      edit_user_route,
      apiKey

    }= this.props
    const { channels } = this.state
    return (

    <React.Fragment>
    <Router>

      {logged_in &&
        <div>
        <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
          <NavbarBrand>YouAnalytics</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink id="HomepageLink" to="/" tag={Link}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/profile" href={edit_user_route}>Profile</NavLink>
              </NavItem>
               <NavItem>
                <NavLink to={`/analytics/${this.state.id_channel}`} tag={Link}>Analytics</NavLink>
              </NavItem>
               <NavItem>
                <NavLink to="/aboutus" tag={Link}>About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/newchannel" tag={Link}>New Channel</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/signout " href={sign_out_route}>Sign Out</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      }
      {!logged_in &&
      <div>
        <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
          <NavbarBrand>YouAnalytics</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink id="HomepageLink" to="/" tag={Link}>Home</NavLink>
              </NavItem>
               <NavItem>
                <NavLink to="/aboutus" tag={Link}>About Us</NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/signin" href={sign_in_route}>Sign In</NavLink>
              </NavItem>
                <NavItem>
                <NavLink to="/signup" href={sign_up_route}>Sign Up</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      }

      <Switch>
        <Route path="/" exact render={(props) => { return ( <Home {...props} channels={channels} logged_in={logged_in} deleteChannel={this.deleteChannel}/> )}} />
       { /* <Route   path="/profile" exact render={( ...props) => <Profile edit_user_route={edit_user_route}/> } /> */}
        <Route path="/aboutus" exact component={AboutUs} />
       {/* <Route path="/newchannel" exact component={NewChannel} /> */}
       {logged_in &&
          <Route path="/analytics/:id" render={(props) => {return ( <Analytics {...props} apiKey={apiKey} /> )}} />
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
      </React.Fragment>
    );
  }
}

export default MainApp
