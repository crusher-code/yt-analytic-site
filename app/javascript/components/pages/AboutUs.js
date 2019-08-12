import React, {Component} from 'react'
import ReactDOM  from 'react-dom'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { Card, CardImg, CardText, CardBody, CardTitle, Row, Col, CardDeck, Button } from 'reactstrap'

class AboutUs extends Component{
    constructor(props){
        super(props)
        this.state = {members: [
                {name: "Dimitri Collas",
                    desc: "Full stack web developer in training at LEARN academy. Unusually passionate about math.",
                    linked_in:"http://linkedin.com/in/dimitri-collas",
                    github: "http://github.com/Dimitriedd",
                    img:"https://www.straitstimes.com/sites/default/files/styles/x_large/public/articles/2019/07/09/yq-hkitty-09072019.jpg?itok=FO2NnPA-"
                },
                {name: "Cattaleya Diaz",
                    desc: "Full-Stack developer with a passion for creative, fun and innovative projects.",
                    linked_in: "https://www.linkedin.com/in/cattaleya-diaz-470095148/",
                    github: "https://github.com/Cattaleya",
                    img: "https://media.licdn.com/dms/image/C4D03AQEdl9MaigflAQ/profile-displayphoto-shrink_200_200/0?e=1571270400&v=beta&t=Fpv_V_n51UF78iaomgZTTTnsme_5KRTJRY9pmTAzHW0"
                },
                {name: "Lali Gabelaya",
                    desc: "I dunno",
                    linked_in: "http://www.linkedin.com/in/lali-gabelaya",
                    github: "https://github.com/lali20021",
                    img: "https://media.licdn.com/dms/image/C5603AQHiUlPywHDkoA/profile-displayphoto-shrink_800_800/0?e=1571270400&v=beta&t=6Yk6SgBY558ao8f5q_mBH9liLeJLRTwCbJ6vO91JmWE"},
                {name: "Jack Maldonado",
                    desc: "Web developer offering enthusiasm and understanding of various programming languages.",
                    linked_in: "https://www.linkedin.com/in/jack-maldonado-a31b7b18a/",
                    github: "https://github.com/jackmaldonado",
                    img: "https://media.licdn.com/dms/image/C5603AQF4B6QBLDt-qQ/profile-displayphoto-shrink_800_800/0?e=1571270400&v=beta&t=X_idVAfsdeTJw6C5o427GrcP6ar0LXVaj0rMm4Z_AyE"
                },
                {name: "Joshua Gibson",
                    desc: "Full-Stack developer with long hair and loud music.",
                    linked_in: "https://www.linkedin.com/in/joshalexgibs/",
                    github: "https://github.com/joshalexgibs", 
                    img: "https://media.licdn.com/dms/image/C5603AQGYmmQZ8Mf0SA/profile-displayphoto-shrink_800_800/0?e=1571270400&v=beta&t=GSO07iv0DgKl2Ua_SHLCK6GxHqOKXDym1OOsKiPLJUI",
                }
            ]
        }
    }
    
    render(){
        const { members } = this.state
        const mapper = members.map((person) => {
            console.log(person.name)
            return (
             
               
               <Col sm="4">
                <Card className="text-center"style={{width:"50%", height:"95%"}}>
               
                    <CardBody  height="200px" width="100px">
                    <CardImg top width="20px" src={person.img} alt="Card image cap" />
                        <CardTitle>{person.name}</CardTitle>
                        <CardText>{person.desc}</CardText>
                        <Button color="primary" href={person.linked_in}>LinkedIn</Button> {''}
                        <Button href={person.github}>github</Button>
                    </CardBody>
                </Card>
                </Col> 
                
                
                )
            })
        return(
            <div>
                <div class ="d-flex justify-content-center">
                <h1>About Us</h1>
                </div>    
                <h2> Code Crusher was founded in August of 2019 at 704 J Street in San Diego California. It primarly composed of five memember each with a passion for development and coding.</h2>
           
            <Row>
             <CardDeck>
                    
                    {/*Add bootstrap cards for each of us, with name,and maybe our professional photos*/}
                    {/*map over an array of members to populate cards for each, filled in with their respective data*/}
                    { mapper }
             </CardDeck>
            </Row>
            
          
            
            </div>
            
        )
    }
}
export default AboutUs