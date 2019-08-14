import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class ListChannels extends React.Component {
  render () {
    const { channels, reloadPage } = this.props
    console.log(channels + "This is the list")
    return (
      <div>
        {channels.map((channel, index) => {
          return(<p key={index}><Link onClick={() => reloadPage(channel.id)} to={`/analytics/${channel.id}`}>{channel.name}</Link></p>)
        })}
      </div>
    );
  }
}

export default ListChannels
