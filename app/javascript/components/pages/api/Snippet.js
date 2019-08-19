import React, { Component } from 'react';


class Snippet extends Component {

render(){
const { snippetData } = this.props
    return (
      <div>
        <img src={snippetData.thumbnails.default.url}></img>
        
        <p>{snippetData.title}</p>
        <p>{snippetData.description}</p>
      </div>
    );
  }
}

export default Snippet;