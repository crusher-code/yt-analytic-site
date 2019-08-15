import React, {Component} from 'react'
import ReactDOM  from 'react-dom'
import {Container, Card, CardTitle, CardText  } from 'reactstrap'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import citytwo from '../images/citytwo'

class Home extends Component{
    
    render(){
        const { channels, deleteChannel, logged_in } = this.props
        return(

        <Container className="d-flex-justify-center" style={{backgroundColor:"#b32615", height: "800px"}}>
            <div>
            <h1 style={{color: "white", textAlign: "center", textShadow:  "3px 2px black"}}>Home</h1>
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
               <Card body outline color="secondary" style={{backgroundColor:"#b32615", color: "white"}}>
                <CardTitle>You Analytics</CardTitle>
                <br></br>
                <CardText>Hey welcome to You Analytics, an App that helps youtubers have a central account to manage thier channel data in mulitple channels.</CardText>
              </Card>
              
            <img src={citytwo} style={{hieght: "100%", width: "100%",postion:"absolute", opacity:".6"}} />
            </Container>  
        )

    }
}
export default Home