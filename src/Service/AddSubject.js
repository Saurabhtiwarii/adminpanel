

export async function AddSubject(subjectName, streamName) {
  
    
        const jwtT = localStorage.getItem('JWTToken');
        console.log(jwtT);
       try{ const logData = await  fetch(`http://localhost:9090/subjects`,{
            method: "POST",
           headers:{
                "Authorization": jwtT,
                'Content-Type': 'application/json; charset=UTF-8'
            },

        body: JSON.stringify({
            "image": "wqwssadad",
            "name": subjectName,
            "stream": streamName
        })
      
		})
    
        const responseStatus = logData.ok;
      
    //    const subjectList = await responseLogdata._embedded.subjectModels;
        console.log(responseStatus);
        return responseStatus;
        // const streams = responseLogdata._embedded.streams;
        // return subjectList;
    } catch(err){
        

            console.log(err);
        
    }
       

}


