import React ,{useState} from 'react';
import {Modal} from 'react-bootstrap';
import '../../App.css';
import VideoPlayer from 'react-video-js-player';
import Food from '../../videos/food.mp4'
import Signup from './Signup';
const Home =()=>{
const videoSrc = Food;
// const poster = "https://img.picturequotes.com/2/545/544955/food-quote-1.jpg";
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

    return(
        <div >
      <VideoPlayer 
      src={videoSrc}
      // poster={poster}
    // width="720"
    // height="460"
    autoplay="true"
    className="my-video"
    
    />
      {/* <h3 className="glow">create your </h3>
    
<h1 className="glow">VLOG</h1>        */}
      <button className="b-btn" onClick={handleShow}>Create Account</button>
      <Modal
        className="my-modal"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header className="my-modal-header" closeButton>
        <Signup />
          
        </Modal.Header>
        
      </Modal>     
        </div>
    )
}
export default Home;