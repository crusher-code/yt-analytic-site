import React, { Component } from 'react';
import { getChannelData, getVideoData, getVideoStatData } from './api/yt_api'
import Videos from './api/Videos'
import Snippet from './api/Snippet'
import Statistics from './api/Statistics'
import ListChannels from './api/ListChannels'


class Analytics extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: null,
      videoData: null,
      videoId: null,
      renderStr: "",
      isLoaded: null,
      channels: null,
    }
    this.getChannels()
    this.getParamId()
  }
  
  getChannels = () => {
    fetch("/channels")
    .then( response => {
      return response.json()
    })
    .then( channels => {
      this.setState({channels})
    })
  }
  
  getChannel = (id) => {
    return fetch(`/channels/${id}`)
    .then( response => {
      return response.json()
    })
  }

  getVideos = () =>{
    getVideoData(this.state.videoId, this.props.apiKey)
    .then( vidData => {
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
  // getParamId = () => {
  //   const { channels } = this.props
  //   let idParam = this.props.match.params.id
  //   idParam = Number(idParam)
  //   let id
  //   channels.map((channel, index) => {
  //     if(channel.id === idParam ){
  //       id = channel.id_channel
  //     }
  //   })
  //   id = id
  // return id
  // }
  getParamId = () => {
    let idParam = this.props.match.params.id
    this.getChannel(idParam)
    .then((channelData)=>{
      return channelData.id_channel
    })
    .then((channelId)=> {
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
    })
  }
  

  render(){
  const { reloadPage } = this.props
  const  { data, videoId, channels, isLoaded, videoData, videoIds } = this.state
    return (
      <div>
      <h1>Analytics</h1>
     {isLoaded &&
      <div>
       {data &&
         <div>
         {channels &&
          < ListChannels channels = {channels} reloadPage = {reloadPage} />
         }
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