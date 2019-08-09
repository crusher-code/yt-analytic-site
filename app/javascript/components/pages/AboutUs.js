import React, {Component} from 'react'
import ReactDOM  from 'react-dom'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'

class AboutUs extends Component{
    render(){
        const members = {
                Dimitri: [{desc: "Full stack web developer in training at LEARN academy with experience in programming, working in groups, and mob programming. Fast learner in areas of mathematics, science, and computer science with a yearning to learn new things."
                    },
                    {linked_in: "http://linkedin.com/in/dimitri-collas"},
                    {github: "http://github.com/Dimitriedd"}],
                Cattaleya: [{desc: "Full-Stack developer with a passion in creative fun and innovative projects."},
                    {linked_in: "https://www.linkedin.com/in/cattaleya-diaz-470095148/"},
                    {github: "https://github.com/Cattaleya"}],
                Lali: [{}],
                
            }
        return(
            <div>
                <h1>About Us</h1>
                <h4>Hello, we are Code Crushers. Our team is comprised of LEARN Academy students and this site is our Capstone Project.</h4>
                {/*Add bootstrap cards for each of us, with name,and maybe our professional photos*/}
                {/*map over an array of members to populate cards for each, filled in with their respective data*/}
                <Card>
                    <CardImg top width="100%" src="" alt="fill alt here" />
                    <CardBody>
                        <CardTitle>Sample Title</CardTitle>
                        <CardText>sample text</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
}
export default AboutUs