

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
      
    //    const subjectList = await responseLogdata._embedded.subjectModels;
        console.log(responseStatus);
        // return responseStatus;
        // const streams = responseLogdata._embedded.streams;
        // return subjectList;
    } catch(err){
        

            console.log(err);
        
    }
       

}


