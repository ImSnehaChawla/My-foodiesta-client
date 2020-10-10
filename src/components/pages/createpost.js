import React ,{useState,useContext,useEffect}from 'react';
import SideBar from './sections/sidebar';
import MainLeft from './sections/mainleft';
import {toast} from 'react-toastify';
import {Redirect} from 'react-router-dom'
import { userContext } from "../context";

toast.configure()

const CreatePost = () =>{
    const[title,setTitle]=useState("");
    const[caption,setCaption]=useState("");
    const[image,setImage]=useState("");
    const[photo,setPhoto]=useState("");
    const [success,setSuccess] = useState(false);
    const { token, setToken } = useContext(userContext);

useEffect(()=>{
    if(photo){
    fetch('/createpost',{
        method:"post",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+localStorage.getItem("token")
        },
        body:JSON.stringify({
            title,
            caption,
            photo
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
            <input className="fc-black" type="file" onChange={(e)=>setImage(e.target.files[0])} />
            </div>
            <div>
            <input className="create-post-title" type="text" placeholder="Enter Title" value={title} onChange={(e)=>setTitle(e.target.value)}  /><br/>
            <input className="create-post-caption" type="text" placeholder="Enter Caption" value={caption} onChange={(e)=>setCaption(e.target.value)} />
            </div>
        <button onClick={()=>postDetails()}>Submit</button>
            
        </div>
        <MainLeft />
    </div>
}
export default CreatePost;