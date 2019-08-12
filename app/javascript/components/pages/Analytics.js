import React, {Component} from 'react'
import ReactDOM  from 'react-dom'
import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom'
import { Nav, NavItem,NavLink } from 'reactstrap'

class Analytics extends Component{
    render(){
        const{
            logged_in, 
            channels_route
    }= this.props
        return(
            <React.Fragment>
            <h1>Analytics</h1>
         <div>
            <li>{channels_route}</li>
         </div>
         </React.Fragment>
         )
    }
}
export default Analytics