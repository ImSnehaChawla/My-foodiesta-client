import React from 'react';
import Card from 'react-bootstrap/Card';
import VideoPlayer from 'react-video-js-player';
import Food from '../../videos/food.mp4'

const welcome = ()=>{
    const videoSrc = Food;
    return<div style={{display:'flex' ,justifyContent:'center',marginTop:'100px'}}>
    
    
    <VideoPlayer 
      src={videoSrc}
      // poster={poster}
  
    autoplay="true"
    className="card-video"
    
    />
    <Card style={{ width: '300px',height:'400px' }}>
    <Card.Body >
        <h1>Username</h1>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <button>like</button><br/>
      <button>follow</button>
    </Card.Body>
  </Card>
  </div> 
}

export default welcome;