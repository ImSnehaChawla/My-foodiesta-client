import React ,{useState, useContext} from 'react'
import {Link, Redirect} from "react-router-dom";
import {Button,Navbar,Nav,Modal} from 'react-bootstrap';
import Login from './pages/Login';
import {userContext} from'./context';
import '../App.css';
const MyNavbar = () =>{
// modal const
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var [logout, setLogout] = useState(false);
  var [login, setLogin] = useState(false);
  const { token, setToken } = useContext(userContext);
  function handleLogout(event) {
    console.log(event);
    setShow(false);
    setLogout(true);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // return <Redirect to="/"></Redirect>;
  }
  function handleLogin(event) {
    setLogin(true);
    setShow(true);
  }
  function getLink() {
    if (token != null)
      return (
        <Nav.Link className="fc-white fw-bold" onClick={handleLogout}>
          
           Logout
        </Nav.Link>
      );
    else
      return (
        <Nav.Link className="fc-white fw-bold" onClick={handleLogin}>
           Login
        </Nav.Link>
      );
  }
  var myLink = getLink();
if(logout) {
  return <Redirect to="/" ></Redirect>
}


    return (<div >
        <Navbar id="my-nav" expand="lg">
          <Navbar.Brand>
          <Link to="/" className="brand-logo left fc-white">Foodiesta</Link>
          </Navbar.Brand>  
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
          <Nav className="ml-auto">
              <Nav.Link href="#home" className=" fw-bold fc-white">About Us</Nav.Link>
              <Nav.Item>
          
                {myLink}
              
              </Nav.Item>
              </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Modal
        
        className="my-modal"
        show={show}
        onHide={handleClose}
        // backdrop="static"
        keyboard={false}
        centered
        
      >
        {/* <Modal.Header className="my-modal-header" closeButton> */}
        <Login />
        <button className="skip" onClick={handleClose}>Skip</button>
          {/* <Modal.Title>Modal title</Modal.Title> */}
        {/* </Modal.Header> */}
        {/* <Modal.Body className="my-modal-body" >
       
        </Modal.Body>
         */}
      </Modal>     
      </div> 
        );
}
export default MyNavbar;