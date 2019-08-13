import React, {Component} from 'react'
import ReactDOM  from 'react-dom'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class Home extends Component{
    
    render(){
        const { channels, deleteChannel } = this.props
        return(
            <div>
            <h1>Home</h1>
                {channels.map((channel, index) => {
                    return(<p key={index}><button onClick={() => deleteChannel(channel.id)}>DELETE</button><Link to={`/analytics/${channel.id}`}>{channel.name}, {channel.id_channel}, {channel.id}</Link></p>)
                })}
            </div>
        )
    }
}
export default Home