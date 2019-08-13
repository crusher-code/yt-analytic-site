import React, { Component } from 'react';

class Videos extends Component {
  componentDidMount(){
    this.props.getVideos()
    
  }
  logTheVideos = () => {
      console.log(this.props.videoData)
  }
// MAKE A VIDEO CLICKABLE RAP THE DIV IN THE MAP RETURN IN <a> TAG WITH A HREF OF href={`https://www.youtube.com/watch?v=${video.contentDetails.videoId}`}
// EMBED CODE <iframe width="256" height="144" src={`https://www.youtube.com/embed/${video.contentDetails.videoId}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  render(){
const { videoData } = this.props

    return (
      <div>
    {videoData &&
        <div>
            {this.props.videoData.map((video, index) => {
                return(
                    <div>
                        <img src={video.snippet.thumbnails.default.url} alt="This is alt"></img>
                        <p>Title: {video.snippet.title}</p>
                        <p>Views: {video.statistics.viewCount}</p>
                        <p>Likes/Dislikes: {`${video.statistics.likeCount}/${video.statistics.dislikeCount}`}</p>
                    </div>
                )
            })}
        </div>
    }
      </div>
    );
  }
}

export default Videos;



