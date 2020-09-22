import React,{useState, useContext} from 'react';
import {Redirect} from 'react-router-dom';
import {toast} from 'react-toastify';
import { userContext } from "../context.js";
// import Signup from './Signup';
// import {Modal, Toast} from 'react-bootstrap';


toast.configure()
const Login =()=>{
    // const [show, setShow] = useState(false);

// const handleClose = () => setShow(false);
// const handleShow = () => {
//     setShow(true);
     
// }
const { token, setToken } = useContext(userContext);
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [success,setSuccess] = useState(false)
    const [error,setError] = useState("")

    const notify =(err)=>{
        toast.error(err,{position:toast.POSITION.TOP_CENTER, autoClose:1000});
    }

    const PostData = ()=>{


        // if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
        // {
        //    return setMessage("You have entered invalid email address");
        // }

        fetch("/signin" ,{
            method:"post",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
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
                localStorage.setItem("token",data.token); //token store kraya localstorage me
                localStorage.setItem("user",JSON.stringify(data.user)); //user ka data store kralia
               setSuccess(true);
            
            }
            console.log(data);
        })
        .catch(err =>{
            console.log(err)
        })
    }
    if(success  || token){
        return <Redirect to="/main"></Redirect>
    }
    
    
    return(           
        <div className="my-card">  
                <h2 className="brand-logo fw-bold fs-3 m-0">Foodiesta</h2>
                <label>Share your food stories❤️.</label>
              
                <hr />
                <input type="email" className="w-100 my-input" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" className="w-100 my-input" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="s-btn" onClick={()=>PostData()} >Login</button>
                {/* <h5>
                    New to us ???
                    <Link className="fw-bold fc-black" onClick={handleShow}> Signup </Link>now !!!
                </h5>
                <Modal
        className="my-modal"
        show={show}
        onHide={handleClose}
        // backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header className="my-modal-header" closeButton>
        <Signup />
          
        </Modal.Header>
        
      </Modal>      */}
                
            
        </div>
        
    )
}
export default Login;