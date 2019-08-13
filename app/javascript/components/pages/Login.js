import React, { Component } from 'react'

class Login extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
  return (
      <div>
        <h2>Log in</h2>
        <form>
          <input id="email" placeholder="email"/>
          <input id="password" placeholder="password"/>
          <button onClick={this.props.onSubmit}>Submit</button>
        </form>
        <button onClick={() => this.props.changePage("home")}>Back to Home</button>
      </div>
    )
  }
}

export default Login