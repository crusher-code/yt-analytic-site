import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class ListChannels extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      dropDown1:"dropdown",
      dropDown2:"dropdown-menu",
      toggle:false
    }
  }
  toggleDropDown = () =>{
    let { dropDown1, dropDown2, toggle } = this.state
      if(toggle === false){
        dropDown1 = "dropdown show"
        dropDown2 = "dropdown-menu show"
        toggle = true
      }else{
        dropDown1 = "dropdown"
        dropDown2 = "dropdown-menu"
        toggle = false
      }
      this.setState({dropDown1,dropDown2,toggle})
    }
  //<p key={index}><Link onClick={() => reloadPage(channel.id)} to={`/analytics/${channel.id}`}>{channel.name}</Link></p>
  render () {
    const { channels } = this.props
    const { dropDown1,dropDown2 } = this.state
    return (
      <div>
        <div className={dropDown1}>
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" onClick={this.toggleDropDown}>
            Channels
          </button>
          <div className={dropDown2}>
            {channels.map((channel, index) => {
              return(<div style={{textAlign: "center"}} key={index} ><a href={`/analytics/${channel.id}`}>{channel.name}</a></div>)
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ListChannels


