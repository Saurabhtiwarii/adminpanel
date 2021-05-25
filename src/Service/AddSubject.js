

export async function AddSubject(subjectName, streamName, imageBase64) {
  
    
        const jwtT = localStorage.getItem('JWTToken');
      
       try{ const logData = await  fetch(`http://localhost:9090/subjects`,{
            method: "POST",
           headers:{
                "Authorization": jwtT,
                'Content-Type': 'application/json; charset=UTF-8'
            },

        body: JSON.stringify({
            "image": imageBase64,
            "name": subjectName,
            "stream": streamName
        })
      
		})
    
        const responseStatus = logData.ok;
      
    //    const subjectList = await responseLogdata._embedded.subjectModels;
        console.log(responseStatus);
        console.log(imageBase64);
        return responseStatus;
        // const streams = responseLogdata._embedded.streams;
        // return subjectList;
    } catch(err){
        

            console.log(err);
        
    }
       

}


