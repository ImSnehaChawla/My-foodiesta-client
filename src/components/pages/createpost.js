import React ,{useState,useContext,useEffect}from 'react';
import SideBar from './sections/sidebar';
import MainLeft from './sections/mainleft';
import {toast} from 'react-toastify';
import {Redirect} from 'react-router-dom'
import { userContext } from "../context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera} from '@fortawesome/free-solid-svg-icons';

toast.configure()

const CreatePost = () =>{
    const[title,setTitle]=useState("");
    const[caption,setCaption]=useState("");
    const[image,setImage]=useState("");
    const[photo,setPhoto]=useState("");
    const [success,setSuccess] = useState(false);
    const { token, setToken } = useContext(userContext);

    function getExtension(filename) {
        var parts = filename.split('.');
        return parts[parts.length - 1];
      }
      
      function isImage(filename) {
        var ext = getExtension(filename);
        switch (ext.toLowerCase()) {
          case 'jpg':
          case 'gif':
          case 'bmp':
          case 'png':
            //etc
            return true;
        }
        return false;
      }
      
      function isVideo(filename) {
        var ext = getExtension(filename);
        switch (ext.toLowerCase()) {
          case 'm4v':
          case 'avi':
          case 'mpg':
          case 'mp4':
            // etc
            return true;
        }
        return false;
      }

useEffect(()=>{
    if(photo){
        if(isVideo(photo) || isImage(photo)){
            
     
    fetch('/createpost',{
        method:"post",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+localStorage.getItem("token")
        },
        body:JSON.stringify({
            title,
            caption,
            photo,
            isVideo:isVideo(photo)
        })
    }).then(res=>res.json())
    .then(data=>{
        // console.log(data)
        if(data.error){
        
        notify(data.error);
    }
    else{
        setSuccess(true);
        console.log(data);
        
    }
    })
    .catch(err =>{
        console.log(err)
    })
    }
}
},[photo])



    const notify =(err)=>{
        toast.error(err,{position: toast.POSITION.TOP_CENTER });
    }
    
    const postDetails = ()=>{
        const data = new FormData()
        data.append("file",image)
        data.append("upload_preset","My-Foodiesta")
        data.append("cloud_name","imsnehachawla")
        fetch("	https://api.cloudinary.com/v1_1/imsnehachawla/image/upload",{
        method:"post",
        body:data
    })
    .then(res=>res.json())
    .then(data=>{
        setPhoto(data.url);
    })
    .catch(err=>{
        console.log(err);
    })
   
    }
    if (success){
        return <Redirect to="/main"></Redirect>}

    return <div>
        <SideBar />
        <div className="create-post">
            <div className="create-post-pic">
                <div className="create-post-input">
                <label for="choosenfile" className="create-post-icon"><FontAwesomeIcon icon={faCamera} size="5x" /></label>
                

<input style={{display:"none"}} className="fc-black" name="choosenfile" id="choosenfile" type="file" 
onChange={(e)=>setImage(e.target.files[0])} />

{/* </div> */}
{/* <div> */}
<input className="my-input " type="text" placeholder="Enter Title" value={title} onChange={(e)=>setTitle(e.target.value)}  /><br/>

<input className="my-input " type="text" placeholder="Enter Caption" value={caption} onChange={(e)=>setCaption(e.target.value)} />


<button className="s-btn" onClick={()=>postDetails()}>Submit</button>

</div>
                </div>
               
        </div>
        <MainLeft />
    </div>
}
export default CreatePost;