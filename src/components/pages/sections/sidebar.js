import React from 'react';
import {Link} from 'react-router-dom';
import '../../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faFire, faSearch,faGlobe,faUserCircle} from '@fortawesome/free-solid-svg-icons';

const sideBar = () =>{
   return <div className="sidenav">
       <Link to="/main" className="side-menu-items"><FontAwesomeIcon icon={faHome} /> home</Link>
       <Link to="#" className="side-menu-items"><FontAwesomeIcon icon={faFire} /> trending</Link>
       <Link to="#" className="side-menu-items"><FontAwesomeIcon icon={faGlobe} /> explore</Link>
       <Link to="/profile" className="side-menu-items"><FontAwesomeIcon icon={faUserCircle} /> profile</Link>
   </div>
}
export default sideBar;