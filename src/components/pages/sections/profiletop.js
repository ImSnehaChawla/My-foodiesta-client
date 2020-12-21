import React from 'react';


const profileTop=()=>{
    const User = JSON.parse(localStorage.getItem("user"));
    return <>
         <div className="profile-top">

                <div>

                    <img style={{height:"150px",width:"150px",borderRadius:"50%"}}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_6k1WcZ8NdWlAf2WSZ7WuwHhLPGppqZxmZw&usqp=CAU"/>
                   
                </div>
             
                <div className="profile-top-labels">
                <h1>{User.username}</h1>
                    <label> <span style={{fontWeight:"500"}}>Followers :</span> 5</label>
                    <label> <span style={{fontWeight:"500"}}>Following :</span> 5</label>
                    <label> <span style={{fontWeight:"500"}}>Posts :</span> 5</label>
            
                    
                </div>
                
                <hr className="hr-50"/>
                
            </div>
            
    </>
}
export default profileTop;