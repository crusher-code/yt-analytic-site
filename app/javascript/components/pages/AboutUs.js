import React, {Component} from 'react'
import ReactDOM  from 'react-dom'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { Card, CardImg, CardText, CardBody, CardTitle, Row, Col, CardDeck, Button, Container } from 'reactstrap'
import lali from '../images/lali'
import jack from '../images/jack'
import josh from '../images/josh'
import brenda from '../images/brenda'
import dimitri from '../images/dimitri'



class AboutUs extends Component{
    // constructor(props){
    //     super(props)
    //     this.state = {members: 
    //     [
    //             {name: "Dimitri Collas",
    //                 desc: "Full stack web developer in training at LEARN academy. Unusually passionate about math.",
    //                 linked_in:"http://linkedin.com/in/dimitri-collas",
    //                 github: "http://github.com/Dimitriedd",
    //                 // img:"https://files.slack.com/files-pri/T04B40L2C-FLYMRHHCJ/img_7207.jpg"
    //             },
    //             {name: "Cattaleya Diaz",
    //                 desc: "Full-Stack developer with a passion for creative, fun and innovative projects.",
    //                 linked_in: "https://www.linkedin.com/in/cattaleya-diaz-470095148/",
    //                 github: "https://github.com/Cattaleya",
    //                 // img: "https://media.licdn.com/dms/image/C4D03AQEdl9MaigflAQ/profile-displayphoto-shrink_200_200/0?e=1571270400&v=beta&t=Fpv_V_n51UF78iaomgZTTTnsme_5KRTJRY9pmTAzHW0"
    //             },
    //             {name: "Lali Gabelaya",
    //                 desc: "I dunno",
    //                 linked_in: "http://www.linkedin.com/in/lali-gabelaya",
    //                 github: "https://github.com/lali20021",
    //                  img: "https://media.licdn.com/dms/image/C5603AQHiUlPywHDkoA/profile-displayphoto-shrink_800_800/0?e=1571270400&v=beta&t=6Yk6SgBY558ao8f5q_mBH9liLeJLRTwCbJ6vO91JmWE"},
    //             {name: "Jack Maldonado",
    //                 desc: "Web developer offering enthusiasm and understanding of various programming languages.",
    //                 linked_in: "https://www.linkedin.com/in/jack-maldonado-a31b7b18a/",
    //                 github: "https://github.com/jackmaldonado",
    //                 // img: "https://media.licdn.com/dms/image/C5603AQF4B6QBLDt-qQ/profile-displayphoto-shrink_800_800/0?e=1571270400&v=beta&t=X_idVAfsdeTJw6C5o427GrcP6ar0LXVaj0rMm4Z_AyE"
    //             },
    //             {name: "Joshua Gibson",
    //                 desc: "Full-Stack developer with long hair and loud music.",
    //                 linked_in: "https://www.linkedin.com/in/joshalexgibs/",
    //                 github: "https://github.com/joshalexgibs", 
    //                 // img: "https://media.licdn.com/dms/image/C5603AQGYmmQZ8Mf0SA/profile-displayphoto-shrink_800_800/0?e=1571270400&v=beta&t=GSO07iv0DgKl2Ua_SHLCK6GxHqOKXDym1OOsKiPLJUI",
    //             }
    //         ]
    //     }
    // }
    
render(){
        // const { members } = this.state
        // const mapper = members.map((person) => {
        //     console.log(person.name)
        //     return (
             
               
        //       <Col sm="4" style={{padding:"10px" }}>
        //         <Card className="text-center text-white"  style={{ width:"89%", height:"100%", padding: "5px" }}>
               
        //             <CardBody>
        //             <CardImg top  width="200px" height="230px" src={person.img}  alt="Card image cap" />
        //                 <CardTitle>{person.name}</CardTitle>
        //                 <CardText>{person.desc}</CardText>
        //                 <Button color="primary" href={person.linked_in}>LinkedIn</Button> {''}
        //                 <Button href={person.github}>github</Button>
        //             </CardBody>
        //         </Card>
        //         </Col>
                
                
        //         )
        //     })
return(
<div>
  <section>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 order-lg-2">
          <div className="p-5">
            <img className="img-fluid rounded-circle" src={lali} alt=""/>
          </div>
        </div>
        <div className="col-lg-6 order-lg-1">
          <div className="p-5">
            <h2 className="display-4">Lali Gabelaya</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="p-5">
            <img className="img-fluid rounded-circle" src={jack} alt=""/>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="p-5">
            <h2 className="display-4">Jack Maldonado</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 order-lg-2">
          <div className="p-5">
            <img className="img-fluid rounded-circle" src={josh} alt=""/>
          </div>
        </div>
        <div className="col-lg-6 order-lg-1">
          <div className="p-5">
            <h2 className="display-4">Josh Gibson</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
          </div>
        </div>
      </div>
    </div>
    </section>
    

  <section>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="p-5">
            <img className="img-fluid rounded-circle" src={brenda} alt=""/>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="p-5">
            <h2 className="display-4">Brenda Diaz</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
      <section>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 order-lg-2">
          <div className="p-5">
            <img className="img-fluid rounded-circle" src={dimitri} alt=""/>
          </div>
        </div>
        <div className="col-lg-6 order-lg-1">
          <div className="p-5">
            <h2 className="display-4">Dimitri Collas</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
)
}
}
export default AboutUs


