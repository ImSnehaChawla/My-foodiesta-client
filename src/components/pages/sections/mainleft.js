import React from 'react';
import {Link} from 'react-router-dom';
import DefaultPic from  '../../../images/defaultProfilePic.jpg';
const mainLeft = () =>{
    const profilePic = DefaultPic;
    return <div className="right-sidebar">
            <img className="lg-profile-pic" src={DefaultPic}/>
        <label className="right-sidebar-items">username</label>
            <Link to="#" className="right-sidebar-items">theme</Link>
            <Link  to="#" className="right-sidebar-items">help</Link>
            <Link  to="/createpost" className="right-sidebar-items">create</Link>
    
    </div> 
}
export default mainLeft;