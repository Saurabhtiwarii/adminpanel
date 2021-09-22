import React, { createContext } from 'react';

export const VideoContext = createContext();



export const VideoProvider = (props)=>{

    const getVideos = async(subjectId)=> {
  
    
        const jwtT = localStorage.getItem('JWTToken');
      
       try{ const logData = await  fetch(`http://localhost:9090/api/subjects/${subjectId}/videos`,{
            method: "GET",
           headers:{
                "Authorization": jwtT,
                'Content-Type': 'application/json; charset=UTF-8'
            }
      
		})
    
        const response = await logData.json();
        const videosList  = response._embedded.videos;
        return videosList;
    
    } catch(err){
        

            console.log(err);
        
    }
       

}


         
           
   
        return (
            <VideoContext.Provider value={ {getVideos:getVideos} }>
                { props.children }
            </VideoContext.Provider>
        )
}