import React from 'react';
import {Link} from 'react-router-dom';
import DefaultPic from  '../../../images/defaultProfilePic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMoon,faQuestionCircle,faPlusCircle } from '@fortawesome/free-solid-svg-icons';
const mainLeft = () =>{
    const profilePic = DefaultPic;
    const User = JSON.parse(localStorage.getItem("user"));
    return <div className="right-sidebar">
            <img className="lg-profile-pic" style={{margin:"10px 80px"}} src={DefaultPic}/>
        <label className="right-sidebar-items" style={{textAlign:"center",fontWeight:500}}>{User.username}</label>
            <Link to="#" className="right-sidebar-items"><FontAwesomeIcon icon={faMoon} /> theme</Link>
            <Link  to="#" className="right-sidebar-items"><FontAwesomeIcon icon={faQuestionCircle} /> help</Link>
            <Link  to="/createpost" className="right-sidebar-items"><FontAwesomeIcon icon={faPlusCircle} /> create</Link>
    
    </div> 
}
export default mainLeft;