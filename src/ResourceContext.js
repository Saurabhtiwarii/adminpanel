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
        
        const logData = await  fetch('http://localhost:9090/admin/streams',{
            method: "GET",
            mode: 'cors',
           headers:{
                "Authorization": jwtT,
                
        }
		})
        const streams = await logData.json();
      

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