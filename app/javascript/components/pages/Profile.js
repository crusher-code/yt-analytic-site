import React, {Component} from 'react'
import PropTypes from "prop-types"
import ReactDOM  from 'react-dom'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Nav, NavItem,NavLink } from 'reactstrap'



class Profile extends Component{
    render(){
    const{
        logged_in,
        edit_user_route
    }= this.props
        return(
        <React.Fragment>
            <header>
                 <h1>Profile</h1>
            </header>
                <div>
                    <a href={edit_user_route}>Edit</a>
                </div>
            
        </React.Fragment>
            );
    }
}
export default Profile