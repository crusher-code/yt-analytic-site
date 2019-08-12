import React, {Component} from 'react'
import ReactDOM  from 'react-dom'
import { 
    Button, 
    Form,
    FormGroup,
    Label, 
    Input, 
    FormText 
} from 'reactstrap';



class NewChannel extends Component {
    render(){
        return(
            
            
    <div>
        <FormGroup>
        
        <h1>Create New Channel</h1>
          <Label>Channel ID</Label>
          <Input type="text" placeholder="Enter your channel id here!" />
        </FormGroup>
        <FormGroup>
          <Label>Channel Name</Label>
          <Input type="text" placeholder="Enter channel name" />
        </FormGroup>
        <Button>Submit</Button>
    </div>
            
         );
    }
}
export default NewChannel