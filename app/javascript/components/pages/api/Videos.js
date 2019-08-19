import React, { Component } from 'react';
import { Card, CardGroup, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col } from 'reactstrap'
//import { Card, CardImg, CardText, CardBody, CardTitle, Row, Col, CardDeck, Button, Container } from 'reactstrap'

class Videos extends Component {
  componentDidMount(){
    this.props.getVideos()
    
  }
  addLikes=(a,b)=>{
    let added = Number(a) + Number(b)
    return added
  }
  likePercent=(a,b)=>{
    let total = this.addLikes(a,b)
    return (`${String((Number(a)/total)*100)}%`)
  }

// MAKE A VIDEO CLICKABLE RAP THE DIV IN THE MAP RETURN IN <a> TAG WITH A HREF OF href={`https://www.youtube.com/watch?v=${video.contentDetails.videoId}`}
// EMBED CODE <iframe width="256" height="144" src={`https://www.youtube.com/embed/${video.contentDetails.videoId}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
// REFER DIMITRI TO PULL MEDIUM SIZE THUMBNAIL
// <meter value={video.statistics.likeCount} min="0" max={this.addLikes(video.statistics.likeCount,video.statistics.dislikeCount)}></meter>
//<progress value={video.statistics.likeCount} max={this.addLikes(video.statistics.likeCount,video.statistics.dislikeCount)}></progress>
render(){
const { videoData } = this.props
    return (
      <div>
    {videoData &&
        <CardGroup>
            {this.props.videoData.map((video, index) => {
            let widthLike = this.likePercent(video.statistics.likeCount,video.statistics.dislikeCount)
            let styleLikeBar = {height:"5px",width:widthLike, backgroundColor:"#0388fc",borderRadius:"10px"}
                return(
                  <Col key={index} xs="3" style={{paddingBottom:"10px", paddingTop:"10px"}}>
                    <Card key={index} style={{height:"100%"}}>
                      <CardBody>
                        <a target="_blank" rel="noopener noreferrer" href={`https://www.youtube.com/watch?v=${video.id}`}>
                          <CardImg src={video.snippet.thumbnails.medium.url} alt='Auto-pulled thumbnail' />
                        </a>
                        <CardTitle style={{paddingTop:"10px"}}>{video.snippet.title}</CardTitle>
                        <CardSubtitle>Views: {video.statistics.viewCount}</CardSubtitle>
                        <CardSubtitle>Likes: {`${video.statistics.likeCount}`}</CardSubtitle>
                        <CardSubtitle>Dislikes: {`${video.statistics.dislikeCount}`}</CardSubtitle>
                        <div style={{height:"5px",width:"100%" , backgroundColor:"#858585", borderRadius:"10px"}}>
                          <div style={styleLikeBar}></div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                )
            })}
        </CardGroup>
    }
      </div>
    );
  }
}

export default Videos;
