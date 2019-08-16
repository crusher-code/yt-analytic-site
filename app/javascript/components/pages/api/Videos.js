import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'

class Videos extends Component {
  componentDidMount(){
    this.props.getVideos()
    
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
                    <Card key={index}>
                        <div style={{width:"120px", height:"90px "}}><CardImg src={video.snippet.thumbnails.default.url} alt="This is alt" /></div>
                        <CardTitle>Title: {video.snippet.title}</CardTitle>
                        <CardSubtitle>Views: {video.statistics.viewCount}</CardSubtitle>
                        <CardSubtitle>Likes/Dislikes: {`${video.statistics.likeCount}/${video.statistics.dislikeCount}`}</CardSubtitle>
                    </Card>
                )
            })}
        </div>
    }
      </div>
    );
  }
}

export default Videos;



