import React, {Component} from 'react'
import ReactDOM  from 'react-dom'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'

class AboutUs extends Component{
    constructor(props){
        super(props)
        this.state = {members: [
                {name: "Dimitri Collas",
                    desc: "Full stack web developer in training at LEARN academy. Unusually passionate about math.",
                    linked_in: "http://linkedin.com/in/dimitri-collas",
                    github: "http://github.com/Dimitriedd"},
                {name: "Cattaleya",
                    desc: "Full-Stack developer with a passion for creative, fun and innovative projects.",
                    linked_in: "https://www.linkedin.com/in/cattaleya-diaz-470095148/",
                    github: "https://github.com/Cattaleya"},
                {name: "Lali Gabelaya",
                    desc: "I dunno",
                    linked_in: "http://www.linkedin.com/in/lali-gabelaya",
                    github: "https://github.com/lali20021"},
                {name: "Jack Maldonado",
                    desc: "Web developer offering enthusiasm and understanding of various programming languages.",
                    linked_in: "https://www.linkedin.com/in/jack-maldonado-a31b7b18a/",
                    github: "https://github.com/jackmaldonado"},
                {name: "Joshua Gibson",
                    desc: "Full-Stack developer with long hair and loud music.",
                    linked_in: "https://www.linkedin.com/in/joshalexgibs/",
                    github: "https://github.com/joshalexgibs"}
            ]
        }
    }
    
    render(){
        const { members } = this.state
        const mapper = members.map((person) => {
            console.log(person.name)
            return (
               
                <Card>
                    <CardImg top width="50%" src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.boredpanda.com%2Fblog%2Fwp-content%2Fuploads%2F2015%2F08%2Fvampire-angry-cat-loki-29.jpg&f=1" alt="fill alt here" />
                    <CardBody>
                        <CardTitle>{person.name}</CardTitle>
                        <CardText>{person.desc}</CardText>
                    </CardBody>
                </Card>
                )
            })
        return(
            <React.Fragment>
                <div>
                    <h1>About Us</h1>
                    <h4>Hello, we are Code Crushers. Our team is comprised of LEARN Academy students and this site is our Capstone Project.</h4>
                    {/*Add bootstrap cards for each of us, with name,and maybe our professional photos*/}
                    {/*map over an array of members to populate cards for each, filled in with their respective data*/}
                    { mapper }
                
                </div>
            </React.Fragment>
        )
    }
}
export default AboutUs