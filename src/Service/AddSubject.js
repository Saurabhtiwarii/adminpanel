

export async function AddSubject(subjectName, streamName, imageBase64) {
  
    
        const jwtT = localStorage.getItem('JWTToken');
        console.log(subjectName,imageBase64, streamName);
      
       try{ const logData = await  fetch(`http://localhost:9090/admin/streams/${streamName}/subjects`,{
            method: "POST",
           headers:{
                "Authorization": jwtT,
                'Content-Type': 'application/json; charset=UTF-8'
            },

        body: JSON.stringify({
            "name": subjectName,
            "image": imageBase64,
            "stream": streamName
        })
      
		})
        console.log(logData.json());
    
        const responseStatus = logData.ok;
      
    //    const subjectList = await responseLogdata._embedded.subjectModels;
        
        return responseStatus;
        // const streams = responseLogdata._embedded.streams;
        // return subjectList;
    } catch(err){
        

            console.log(err);
        
    }
       

}


