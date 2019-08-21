import React, { Component } from 'react';


class Snippet extends Component {

render(){
const { snippetData, statisticsData } = this.props
    return (
      <div style={{height:"280px", paddingTop: "5px"}}>
        <div style={{display: "inline-block", verticalAlign:"top"}}>
          <img src={snippetData.thumbnails.medium.url}></img>
        </div>
        <div style={{display: "inline-block", verticalAlign:"top", paddingLeft:"10px"}}>
          <h2>{snippetData.title}</h2>
          <p>{snippetData.description}</p>
          <p>Subcribers: {statisticsData.subscriberCount}</p>
          <p>Channel views: {statisticsData.viewCount}</p>
        </div>
      </div>
    );
  }
}

export default Snippet;