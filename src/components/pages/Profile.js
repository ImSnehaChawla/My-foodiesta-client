import React from "react";
import SideBar from './sections/sidebar';
import MainLeft from './sections/mainleft';
import ProfileTop from './sections/profiletop';
import Gallery from './sections/gallery';
const Profile = ()=>{


    return (<>
    <SideBar />
    <ProfileTop />
        {/* <div className="profile-page"> */}
           
         <Gallery/>
           
        {/* </div> */}
        <MainLeft/>
        </>
    )
}

export default Profile;