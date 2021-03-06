

export async function getSubjectDetails(subjectId) {
  
    
        const jwtT = localStorage.getItem('JWTToken');
      
       try{ const logData = await  fetch(`http://localhost:9090/api/subjects/${subjectId}`,{
            method: "GET",
           headers:{
                "Authorization": jwtT,
                'Content-Type': 'application/json; charset=UTF-8'
            }
      
		})
    
        const responseStatus = logData.ok;
        const subjectDesc = await logData.json();
    //    const subjectList = await responseLogdata._embedded.subjectModels;
        const {name, stream, image} = subjectDesc;
        return {name, stream, image};
        // const streams = responseLogdata._embedded.streams;
        // return subjectList;
    } catch(err){
            console.log(err);
    }
       

}


