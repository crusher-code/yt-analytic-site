import React, {Component} from 'react'
import ReactDOM  from 'react-dom'
//import mainpic from '../images/mainpic'
import { Button } from 'reactstrap'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class Home extends Component{
  render(){
    const { channels, deleteChannel, logged_in } = this.props
      return(
        <div>
          {logged_in &&
            <div  className="image" style={{height:"-webkit-fill-available", width:"100%"}}>
              {channels &&
                <div style={{float:"right", paddingRight:"20px"}}>
                {channels.map((channel, index) => {
                  return(
                    <p key={index}>
                      <Link to={`/analytics/${channel.id}`} style={{fontSize:"16px"}}>{index+1}: {channel.name}     </Link>
                      <Button outline color="danger" size="sm" style={{height:"25px",paddingTop:"2px"}} onClick={() => deleteChannel(channel.id)}>X</Button>
                      <br></br>
                    </p>
                  )
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
