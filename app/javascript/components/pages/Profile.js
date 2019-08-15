import React, {Component} from 'react'
import PropTypes from "prop-types"
import ReactDOM  from 'react-dom'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Nav, NavItem,NavLink } from 'reactstrap'
import citythree from '../images/citythree'



class Profile extends Component{
    render(){
    const{
        logged_in,
        edit_user_route
    }= this.props
        return(
            <div class="d-flex-justify-center">
                <h1>Profile</h1>
                    <a href={edit_user_route}>Edit</a>
            </div>
            
        
            );
    }
}
export default Profile