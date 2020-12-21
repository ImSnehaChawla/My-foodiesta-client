import React ,{useState, useContext} from 'react';
import {Redirect} from 'react-router-dom';
import {toast} from 'react-toastify';
import { userContext } from "../context";
// import Login from './Login';
// import {Modal,Toast} from 'react-bootstrap';


toast.configure()
const Signup =()=>{

    

    
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

const { token, setToken } = useContext(userContext);
    const [username,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [success,setSuccess] = useState(false)
    const [error,setError] = useState("")
    const notify =(err)=>{
        toast.error(err,{position: toast.POSITION.TOP_CENTER , autoClose:1000});
    }

    const PostData = ()=>{

       
        fetch("/signup" ,{
            method:"post",
            headers:{"Content-Type":"application/json",
                   
        },
            body:JSON.stringify({
                username,
                password,
                email
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data.error){
                setError(data.error);
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
    if (token) return <Redirect to="/main"></Redirect>;

   else if (success){
         return <Redirect to="/main"></Redirect>}
    
else
    return(<div>
    
        <div className="my-card">
            <h2 className="brand-logo fw-bold fs-3 m-0">Foodiesta</h2>
            <label>Share your food stories <span role="img" >❤️</span></label>
            
            <hr />
            <input type="text" className="w-100 my-input" placeholder="Enter Username" value={username} 
            onChange={(e) => setName(e.target.value)} />
            <input type="email" className="w-100 my-input" placeholder="Enter Email" value={email} 
            onChange={(e) => setEmail(e.target.value)} />
            <input type="password" className="w-100 my-input" placeholder="Enter Password" value={password} 
             onChange={(e) => setPassword(e.target.value)} />
            
            <button className="s-btn" onClick={()=>PostData()}>Signup</button>
             
    
    </div>
    </div>
    );
}
export default Signup;