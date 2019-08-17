import React, {Component} from 'react'
import ReactDOM  from 'react-dom'
import mainpic from '../images/mainpic'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class Home extends Component{
    
    render(){
        const { channels, deleteChannel, logged_in } = this.props
        return(
            <div>
            <img  style={{width: '105%', height: '105%'}}src={mainpic} alt=""/>
              {logged_in &&
               <div>
               {channels &&
                <div>
                {channels.map((channel, index) => {
                    return(<p key={index}><button onClick={() => deleteChannel(channel.id)}>DELETE</button><Link to={`/analytics/${channel.id}`}>{channel.name}, {channel.id_channel}, {channel.id}</Link></p>)
                })}
                </div>
               }
               </div>
              }
            </div>
        )
    }
}
export default Home