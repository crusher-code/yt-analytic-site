import React, { Component } from 'react';



class Statistics extends Component {

  render(){
const { statisticsData } = this.props
    return (
      <div>
        <p>Subcribers: {statisticsData.subscriberCount}</p>
        <p>Channel views: {statisticsData.viewCount}</p>
      </div>
    );
  }
}

export default Statistics;