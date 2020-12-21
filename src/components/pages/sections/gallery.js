
import React, {useEffect, useState} from 'react';
const Gallery =()=>{
    const [mypics,setPics] = useState([]);
    useEffect(() => {
        fetch("/myposts",{
            headers:{
    "Authorization":"Bearer " + localStorage.getItem("token")
            }
        }).then(res =>res.json())
        .then(result =>{
            setPics(result.mypost);
            console.log(result);
            
        })
    },[])
    return <div className="profile-page">
    <div className="gallery">
        {
            mypics.map(item =>{
                return <div  className="gallery-items" ><img
               key={item._id} src={item.photo} alt={item.title} style={{width:"280px", height:"200px"}}/></div>
            })
        }
    
    
</div>
</div>
}
export default Gallery;