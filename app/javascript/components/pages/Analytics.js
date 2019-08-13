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
      videoData: null,
      videoId: null,
      renderStr: "",
      isLoaded: null,
    }
  }

  getVideos = () =>{
    getVideoData(this.state.videoId, this.props.apiKey)
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
      getVideoStatData(videoIds, this.props.apiKey)
      .then( videoData => {
        videoData = videoData.items
        this.setState({ videoData })
      })
    })
    
  }
  getParamId = () => {
    const { channels } = this.props
    console.log(channels)
    let idParam = this.props.match.params.id
    idParam = Number(idParam)
    console.log(idParam + "PARAM ID")
    let id
    channels.map((channel, index) => {
      console.log(channel.id)
      if(channel.id === idParam ){
        console.log(channel.id)
        id = channel.id_channel
      }
    })
    id = id
    console.log(id)
  return id
  }
  componentDidMount(){
    let channelId = this.getParamId()
    console.log(channelId + "CHANNEL ID")
    getChannelData(channelId, this.props.apiKey)
    .then( data => {
            data = data.items[0]
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