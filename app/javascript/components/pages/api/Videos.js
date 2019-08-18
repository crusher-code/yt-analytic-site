import React, { Component } from 'react';
import { Card, CardGroup, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col } from 'reactstrap'
//import { Card, CardImg, CardText, CardBody, CardTitle, Row, Col, CardDeck, Button, Container } from 'reactstrap'

class Videos extends Component {
  componentDidMount(){
    this.props.getVideos()
    
  }

// MAKE A VIDEO CLICKABLE RAP THE DIV IN THE MAP RETURN IN <a> TAG WITH A HREF OF href={`https://www.youtube.com/watch?v=${video.contentDetails.videoId}`}
// EMBED CODE <iframe width="256" height="144" src={`https://www.youtube.com/embed/${video.contentDetails.videoId}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
// REFER DIMITRI TO PULL MEDIUM SIZE THUMBNAIL

  render(){
const { videoData } = this.props
    return (
      <div>
    {videoData &&
        <CardGroup>
            {this.props.videoData.map((video, index) => {
                return(
                  <Col xs="3" style={{paddingBottom:"10px"}}>
                    <Card key={index} style={{height:"100%"}}>
                      <CardImg src={video.snippet.thumbnails.default.url} style={{width:"120px", height:"90px", padding:"5px"}} alt='Auto-pulled thumbnail' />
                      <CardBody>
                        <CardTitle>Title: {video.snippet.title}</CardTitle>
                        <CardSubtitle>Views: {video.statistics.viewCount}</CardSubtitle>
                        <CardSubtitle>Likes/Dislikes: {`${video.statistics.likeCount}/${video.statistics.dislikeCount}`}</CardSubtitle>
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



