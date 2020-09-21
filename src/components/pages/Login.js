import React,{useState} from 'react';
import {Link,Redirect} from 'react-router-dom';
import Signup from './Signup';
import {Modal, Toast} from 'react-bootstrap';

const Login =()=>{
    const [show, setShow] = useState(false);
    const [showToast, setShowToast] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [success,setSuccess] = useState(false)
    const [error,setError] = useState("")
    
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
            console.log(data);
            if(data.error){
               setError(data.error);
               setShowToast(true);
            }
            else{
               setSuccess(true);
            
            }
            console.log(data);
        })
        .catch(err =>{
            console.log(err)
        })
    }
    if(success){
        return <Redirect to="/"></Redirect>
    }
    
    
    return(           
        <div className="my-card">  
                <h2 className="brand-logo fw-bold fs-3 m-0">Foodiesta</h2>
                <label>Share your food stories❤️.</label>
                {showToast ?<Toast className="center" autohide>
                <Toast.Body>{error}</Toast.Body>
            </Toast> : null}
                <hr />
                <input type="email" className="w-100 my-input" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" className="w-100 my-input" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="s-btn" onClick={()=>PostData()} >Login</button>
                <h5>
                    New to us ???
                    <Link className="fw-bold fc-black" onClick={handleShow}> Signup </Link>now !!!
                </h5>
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
export default Login;