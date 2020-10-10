import React from 'react';
import {Link} from 'react-router-dom';
import '../../../App.css';

const sideBar = () =>{
   return <div className="sidenav">
       <Link to="#" className="side-menu-items">home</Link>
       <Link to="#" className="side-menu-items">trending</Link>
       <Link to="#" className="side-menu-items">explore</Link>
       <Link to="/profile" className="side-menu-items">profile</Link>
   </div>
}
export default sideBar;