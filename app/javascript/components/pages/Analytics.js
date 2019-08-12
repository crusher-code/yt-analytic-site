import React, { Component } from 'react';
import { getChannelData, getVideoData, getVideoStatData } from './api/yt_api'
import Videos from './api/Videos'
import Snippet from './api/Snippet'
import Statistics from './api/Statistics'


class Analytics extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: null,
      channelId: "UC-lHJZR3Gqxm24_Vd_AJ5Yw",
      videoData: null,
      videoId: null,
      renderStr: "",
      isLoaded: null,
    }
  }

  getVideos = () =>{
    getVideoData(this.state.videoId)
    .then( vidData => {
      console.log(vidData)
      vidData = vidData.items
      let videoIds = ""
      vidData.map((video, index) => {
        if(vidData.length -1 !== index){
         videoIds = `${videoIds}${video.contentDetails.videoId}%2C`
        }else{
          videoIds = `${videoIds}${video.contentDetails.videoId}&`
        }
      })
      getVideoStatData(videoIds)
      .then( videoData => {
        videoData = videoData.items
        this.setState({ videoData })
      })
    })
    
  }
  componentDidMount(){
    getChannelData(this.state.channelId)
    .then( data => {
            data = data.items[0]
            console.log(data)
            if(data !== undefined){
              let renderStr = JSON.stringify(data)
              let videoId = data.contentDetails.relatedPlaylists.uploads
              let isLoaded = true
              this.setState({ data, renderStr, videoId, isLoaded })
            }
            else{
              let isLoaded = false
              let data = false
              this.setState({ isLoaded, data })
            }
    })
  }
  //          <p>{videoId}</p>
  //        <p>{this.state.renderStr}</p>

  render(){
  const  { data, videoId, isLoaded, videoData, videoIds } = this.state
  console.log(isLoaded)
  console.log(videoData)
    return (
      <div>
      <h1>Analytics</h1>
     {isLoaded &&
      <div>
       {data &&
         <div>
          < Snippet snippetData = {data.snippet} />
          < Statistics statisticsData = {data.statistics} />
          < Videos videoData={videoData} getVideos={this.getVideos} />
         </div>
       }
      </div>
     }
     {!isLoaded &&
        <div>
         <p>There was a problem fetching your data</p>
        </div> 
     }
      </div>
    );
  }
}

export default Analytics