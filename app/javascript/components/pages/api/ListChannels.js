import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class ListChannels extends React.Component {
  //<p key={index}><Link onClick={() => reloadPage(channel.id)} to={`/analytics/${channel.id}`}>{channel.name}</Link></p>
  render () {
    const { channels } = this.props
    return (
      <div>
        {channels.map((channel, index) => {
          return(<div key={index}><a href={`/analytics/${channel.id}`}>{channel.name}</a></div>)
        })}
      </div>
    );
  }
}

export default ListChannels
