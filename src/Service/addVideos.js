

export async function addVideos(videoNumber, streamName, videoUrl, subjectId, description, title) {
  
    
        const jwtT = localStorage.getItem('JWTToken');
      
       try{ const logData = await  fetch(`http://localhost:9090/videos`,{
            method: "POST",
           headers:{
                "Authorization": jwtT,
                'Content-Type': 'application/json; charset=UTF-8'
            },

        body: JSON.stringify({
            "number": videoNumber,
            "stream": streamName,
            "title": title,
            "description": description,
            "url": videoUrl,
            "subject":{
                "id": subjectId
            }
        })
      
		})
    
        const responseStatus = logData.ok;
      

        console.log(responseStatus);
        return responseStatus;
       
    } catch(err){
        

            console.log(err);
        
    }
       

}


