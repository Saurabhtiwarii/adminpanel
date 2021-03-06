import React, { createContext } from 'react';

export const SubjectsContext = createContext();



export const SubjectsProvider = (props)=>{

    // const [loginStatus, setLoginStatus] = useState(false);
    // const [jwtToken, setJwtToken] = useState({});
    const getSubject = async (stream)=>{
        // if(!localStorage.getItem('JWTToken')){
        //     return null;
        // }

        
        const jwtT = localStorage.getItem('JWTToken');
   
       try{ const logData = await  fetch(`http://localhost:9090/admin/streams/${stream}/subjects`,{
            method: "GET",
            mode: 'cors',
           headers:{
                "Authorization": jwtT,
        }

		})
        
       
   
       const responseLogdata = await logData.json();
       console.log(responseLogdata);
        
        return responseLogdata;
    } catch(err){
        

            return [];
        
    }
       
        } 


         
           
   
        return (
            <SubjectsContext.Provider value={ {getSubject:getSubject} }>
                { props.children }
            </SubjectsContext.Provider>
        )
}