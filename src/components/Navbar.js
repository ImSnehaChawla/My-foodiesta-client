import React ,{useState} from 'react'
import {Link} from "react-router-dom";
import {Button,Navbar,Nav,Modal} from 'react-bootstrap';
import Login from './pages/Login';
import '../App.css';
const MyNavbar = () =>{
// modal const
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    return (<div >
        <Navbar id="my-nav" expand="lg">
          <Navbar.Brand>
          <Link to="/" className="brand-logo left fc-white">Foodiesta</Link>
          </Navbar.Brand>  
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
          <Nav className="ml-auto">
              <Nav.Link href="#home" className=" fw-bold fc-white">About Us</Nav.Link>
              <Nav.Link className="fc-white fw-bold" onClick={handleShow}>
                {/* <Button variant="primary"  t-btn" > */}
                Login
              {/* </Button> */}
              </Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Modal
        id="login-modal"
        className="my-modal"
        show={show}
        onHide={handleClose}
        // backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header className="my-modal-header" closeButton>
        <Login />
          {/* <Modal.Title>Modal title</Modal.Title> */}
        </Modal.Header>
        {/* <Modal.Body className="my-modal-body" >
       
        </Modal.Body>
         */}
      </Modal>     
      </div> 
        );
}
export default MyNavbar;