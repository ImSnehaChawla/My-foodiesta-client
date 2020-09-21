import React ,{useState} from 'react';
import {Link,Redirect} from 'react-router-dom';
import Login from './Login';
import {Modal,Toast} from 'react-bootstrap';

const Signup =()=>{

    const [show, setShow] = useState(false);
    const [errorToast, setShowToast] = useState(false);
    
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    
    const [username,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [success,setSuccess] = useState(false)
    const [error,setError] = useState("")

    const PostData = ()=>{

        // if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
        // {
        //   return setMessage("You have entered an invalid email address!");
        // }

        fetch("/signup" ,{
            method:"post",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                username,
                password,
                email
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.error){
                setError(data.error);
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
    if (success){
         return <Redirect to="/"></Redirect>}
else
    return(
        <div className="my-card">
            <h2 className="brand-logo fw-bold fs-3 m-0">Foodiesta</h2>
            <label>Share your food stories <span role="img" >❤️</span></label>
            {errorToast ?<Toast className="center">
                <Toast.Body>{error}</Toast.Body>
            </Toast> : null}
            
            <hr />
            <input type="text" className="w-100 my-input" placeholder="Enter Username" value={username} onChange={(e) => setName(e.target.value)} />
            <input type="email" className="w-100 my-input" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" className="w-100 my-input" placeholder="Enter Password" value={password}  onChange={(e) => setPassword(e.target.value)} />
            
            <button className="s-btn" onClick={()=>PostData()}>Signup</button>
            <h6>
                    Already Have an account???
                    {/* <Link to="/signin"> Signin </Link>Here!!! */}
                    <Link  className="fc-black fw-bold" onClick={handleShow}>
                Login
              </Link>
                </h6>
                <Modal
        className="my-modal"
        show={show}
        onHide={handleClose}
        // backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header className="my-modal-header" closeButton>
        <Login />
        </Modal.Header>
        
      </Modal>     
            
    
    </div>
    );
}
export default Signup;