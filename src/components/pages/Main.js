import React,{useState,useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import VideoPlayer from 'react-video-js-player';
import Food from '../../videos/food.mp4'
import SideBar from './sections/sidebar';
import MainLeft from './sections/mainleft';
import {Link, Redirect} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart ,faComment, faUserPlus, faEllipsisV,faTrash} from '@fortawesome/free-solid-svg-icons';
import "../../App.css";


const Welcome = ()=>{
  const [data,setData] = useState([]);
  const User = JSON.parse(localStorage.getItem("user"));
  
  
  

  useEffect(()=>{
    fetch('/allposts',{
      headers:{
        "Authorization":"Bearer "+localStorage.getItem("token")
      }
    }).then(res=>res.json())
    .then(result=>{
      console.log(result)
    
      setData(result.posts)
      console.log(data);
    })
  },[])

    const likePost =(id)=>{  
      
      fetch("/likes",{
        method:"put",
        headers:{
          "Content-Type":"application/json",
          "Authorization":"Bearer " +localStorage.getItem("token")
        },
        body:JSON.stringify({
          postId:id //same jese likes route me likha h vhi postid
        })
      }).then(res=>res.json())
      .then(result => {
        console.log(result);
        
        {
        const newData = data.map(item =>{
        
          if(item._id === result._id){
            console.log(item._id,result._id);
            return result
          }
          else{
            return item
          }
        })
        setData(newData);
      }
      }).catch(err => {
        console.log(err);
      })
    
      }

      const makeComment = (text , postId)=>{
        fetch("/comments",{
          method:"put",
          headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+localStorage.getItem("token")
          },
          body:JSON.stringify({
            postId, //again we have not written postId:postId text:text bcz same name of both key value so we condesed it
            text
        })
        }).then(res=>res.json()) //it will again return a promise so we have to write then again 
        .then(result =>{
          console.log(result)
        
          const newData = data.map(item =>{
          
            if(item._id === result._id){
              // console.log(item._id,result._id);
              return result
            }
            else{
              return item
            }
            
          })
          setData(newData);
        
        }).catch(err => {
          console.log(err)
      })
    }
    
  const deletePost = (postid)=>{
    fetch(`/deletepost/${postid}` ,{
      method:"delete",
      headers:{
        Authorization:"Bearer "+localStorage.getItem("token")
      }
    }).then(res => res.json())
    .then(result => {
      console.log(result)
      const newData = data.filter(item => {
        return item._id != result._id
      })
      setData(newData)
    })
  }

    const videoSrc = Food;
    if(!localStorage.getItem("token"))
    return (<Redirect to="/"></Redirect>);
    else
    return<div className="main-page">
    
      <SideBar/>
      <div className="main-page-post" >
      {
      data.map(item=>{
        return(<div>
     
        <div style={{position:'relative'}}>
        
              <h3 className="video-side-username">@{item.postedBy.username}
              {item.postedBy._id === User._id &&  <span style={{float:"right"}}><FontAwesomeIcon icon={faTrash} onClick={deletePost(item._id)} /></span>}
             </h3>
              
              {
              (item.isVideo)?
              <VideoPlayer  //yha condition lgani h
                  src={item.photo}
                  
                  onDoubleClick ={()=>{
                    likePost(item._id); 
                    
                  }}
                autoplay="true"
                className="card-video"
                /> : <img src={item.photo} 
                className="card-video"
                onDoubleClick={()=>{
                  
              likePost(item._id);
                
                  
                  
                }} 
                />  
                
            }          
                {/* <div className="video-side-items">
                    <label className="m-20">follow</label>
                    <label className="m-20">likes</label>
                    <label className="m-20">comment</label>
                    
                    
                </div> */}
        </div>
                        
                <Card className="main-card">
                
                <Card.Body>
                <Card.Title>{item.title} </Card.Title>
                <div className="video-side-items">
                    <label className="m-20">
                      <FontAwesomeIcon icon={faUserPlus}/>
                    </label>
                    <label className="m-20" onClick={()=>{likePost(item._id)}}>
                    {
                      // console.log(User,typeof likedby)
                      item.likes.includes(User._id) ? <FontAwesomeIcon className="osm-icon-liked"   icon={faHeart} 
                      /> :  <FontAwesomeIcon className="osm-icon"  icon={faHeart} 
                        />
                    }
                    <span>{item.likes.length}</span>


                    </label>
                    
             
                    <label className="m-20"><FontAwesomeIcon icon={faComment} /></label>
                    
                    
                </div>
                <Card.Text>{item.caption}</Card.Text>
                {
                  item.comments.map(record=>{
                    return(
                      
                      <label>
                        {console.log(record)}
                        <span style={{fontWeight:"500"}}>{record.postedBy.username}</span>  {record.text}</label>
                    )
                  })
                }
                    <form onSubmit={(e)=>{
                      e.preventDefault();
                      // console.log(e.target[0].value)
                      makeComment(e.target[0].value , item._id)

                    }}>
                      <input type="text" style={{width:"100%"}}  className="my-input" placeholder="add a comment"/> 
                    </form>
                </Card.Body>
              
              </Card>
              <div style={{height:'50px',width:'100%'}}></div>
            
       
    
      </div> 

        );
      })
    }
      
  </div>  
  <MainLeft />
  </div>

  }
export default Welcome;
