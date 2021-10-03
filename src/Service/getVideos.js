



// videoNumber, streamName, videoUrl, subjectId,description, title
export async function getVideos(subjectId, videoSubject) {
  
    
        const jwtT = localStorage.getItem('JWTToken');
      
       try{ const logData = await  fetch(`http://localhost:9090/admin/stream/${videoSubject}/subjects/${subjectId}/videos`,{
            method: "GET",
           headers:{
                "Authorization": jwtT,
                'Content-Type': 'application/json; charset=UTF-8'
            }
      
		})
    
        const response = await logData.json();
        const videosList  = response._embedded.videos;
        console.log(videosList);
        return videosList;
    
    } catch(err){
        

            console.log(err);
        
    }
       

}


