import React, { createContext } from 'react';

export const ResourceContext = createContext();



export const ResourceProvider = (props)=>{

    // const [loginStatus, setLoginStatus] = useState(false);
    // const [jwtToken, setJwtToken] = useState({});
    const getResource = async (url)=>{
        // if(!localStorage.getItem('JWTToken')){
        //     return null;
        // }

    try {
        const jwtT = localStorage.getItem('JWTToken');
        
        const logData = await  fetch('http://localhost:9090/resource/streams',{
            method: "GET",
            mode: 'cors',
           headers:{
                "Authorization": jwtT,
        }

		})
       const responseLogdata = await logData.json();
      
        const streams = responseLogdata._embedded.streams;
        return streams;
       
        } catch(err) {
   
                 console.log(err);  
         }

}
         
           
   
        return (
            <ResourceContext.Provider value={ {getResource:getResource} }>
                { props.children }
            </ResourceContext.Provider>
        )
}