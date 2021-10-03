

export async function addVideos(videoNumber, streamName, videoUrl, subjectId, description, title, videoSubject,subjectImage) {
  
    
        const jwtT = localStorage.getItem('JWTToken');
      
       try{ const logData = await  fetch(`http://localhost:9090/admin/streams/${streamName}/subjects/${subjectId}/videos`,{
            method: "POST",
           headers:{
                "Authorization": jwtT,
                'Content-Type': 'application/json; charset=UTF-8'
            },

        body: JSON.stringify({
                "description": description,
                "stream": streamName,
                "subject": {
                  "name": videoSubject,
                  "image": subjectImage,
                  "id": subjectId,
                  "stream": streamName
                },
                "title": title,
                "url": videoUrl
        
        })
      
		})
        console.log(logData);
        const responseStatus = logData.ok;
      

        console.log(responseStatus);
        return responseStatus;
       
    } catch(err){
        

            console.log(err);
        
    }
       

}


