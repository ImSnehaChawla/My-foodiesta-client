import React from 'react';
import Card from 'react-bootstrap/Card';
import VideoPlayer from 'react-video-js-player';
import Food from '../../videos/food.mp4'
import SideBar from './sections/sidebar';
import MainLeft from './sections/mainleft';
import {Link} from 'react-router-dom';

const welcome = ()=>{
    const videoSrc = Food;
    return<div className="main-page">
    
      <SideBar/>
      
    <div className="main-page-post">
     
    <div style={{position:'relative'}}>
      <h3 className="video-side-username">username</h3>
    <VideoPlayer 
      // src={videoSrc}
      // poster={poster}
  
    autoplay="true"
    className="card-video"
    
    
    />
     <div className="video-side-items">
        <label className="m-20">follow</label>
        <label className="m-20">likes</label>
        <label className="m-20">comment</label>
        
        
      </div>
    </div>
    
    <Card className="main-card">
    
    <Card.Body>
    <Card.Title>Card Title + likes comment</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
       
      </Card.Text>
     
      
    </Card.Body>
   
  </Card>
  <div style={{height:'50px',width:'100%'}}></div>

   
  <div style={{position:'relative'}}>
      <h3 className="video-side-username">username</h3>
    <VideoPlayer 
      // src={videoSrc}
      // poster={poster}
  
    autoplay="true"
    className="card-video"
    
    
    />
     <div className="video-side-items">
        <label className="m-20">follow</label>
        <label className="m-20">likes</label>
        <label className="m-20">comment</label>
        
        
      </div>
    </div>
    
    <Card className="main-card">
    
    <Card.Body>
    <Card.Title>Card Title + likes comment</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
     
      
    </Card.Body>
   
  </Card>
  <div style={{height:'50px',width:'100%'}}></div>
  <div style={{position:'relative'}}>
      <h3 className="video-side-username">username</h3>
    <VideoPlayer 
      // src={videoSrc}
      // poster={poster}
  
    autoplay="true"
    className="card-video"
    
    
    />
     <div className="video-side-items">
        <label className="m-20">follow</label>
        <label className="m-20">likes</label>
        <label className="m-20">comment</label>
        
        
      </div>
    </div>
    
    <Card className="main-card">
    
    <Card.Body>
    <Card.Title>Card Title + likes comment</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
       
      </Card.Text>
     
      
    </Card.Body>
   
  </Card>
  <div style={{height:'50px',width:'100%'}}></div>

  </div> 
  
  <MainLeft />
  </div>
}

export default welcome;