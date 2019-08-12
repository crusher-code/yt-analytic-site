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
    constructor(props){
        super(props)
        this.state = {
            form: {
                channelid: "",
                name: ""
            }
        }
    }
       
       
    buttonSubmit = () => {
        const { onSubmit } = this.props
        const { form } = this.state
        onSubmit(form)
        .then(() => {
            this.setState({createSuccess: true})
        })
    }
    
    onChange = (e) => {
        const {form} = this.state
        const { name, value } = e.target
        form[name] = value
        this.setState({form})
    }
    
    
    render(){
        const {
            channelid,
            name,
            createSuccess
        } = this.state
        return(
            
            <React.Fragment>
            { createSuccess && <Redirect to="/analytics"/> }
    <div>
        <FormGroup>
        
        <h1>Create New Channel</h1>
          <Label>Channel ID</Label>
          
          <Input 
          name="channelid"
          value={channelid}
          placeholder="Enter channel id here!" 
          onChange = {this.onChange}
          type="text"
          />
          
        </FormGroup>
        <FormGroup>
          <Label>Channel Name</Label>
          <Input 
          name = "name"
          value= {name}
          type="text"
          placeholder="Enter channel name"
          onChange = {this.onChange}
          />
        </FormGroup>
        <Button onClick={this.buttonSubmit} >Submit</Button>
    </div>
    </React.Fragment>
            
         );
    }
}
export default NewChannel