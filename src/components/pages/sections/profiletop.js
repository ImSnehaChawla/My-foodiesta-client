import React from 'react';

const profileTop=()=>{
    return <>
         <div className="profile-top">

                <div>
<h1>{console.log(localStorage.user)}</h1>
                    <img className="lg-profile-pic"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_6k1WcZ8NdWlAf2WSZ7WuwHhLPGppqZxmZw&usqp=CAU"/>
                </div>
                <div>
                    <label>posts</label>
                    <label>followers</label>
                    <label>following</label>
                    
                </div>
                
                <hr className="hr-50"/>
                
            </div>
            
    </>
}
export default profileTop;