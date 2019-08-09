import React, {Component} from 'react'
import ReactDOM  from 'react-dom'

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