import React, { useState, createContext } from 'react';

export const LoginContext = createContext();



export const LoginProvider = (props)=>{
    let jwtT = '';
    const [loginStatus, setLoginStatus] = useState(false);
    const [jwtToken, setJwtToken] = useState({});
     const login = async (userEmail, password)=>{
      const data ={
        username: userEmail,
        password: password
      }

   try {
        const result = await  fetch('http://localhost:9090/authenticate',{
	    method:'POST',
        headers:{
				'Content-Type':'application/json',
				'Accept':'application/json'
		    	},
		body:JSON.stringify(data)
		})
        const responseStatus = await result.status;
        const responseJson = await result.json();
        const token = await responseJson.jwtToken;
        localStorage.setItem('JWTToken',token);
         const  status = responseStatus;
         if(status === 200 && status <300){
                setLoginStatus(true);
            }
            else{
                setLoginStatus(false);
            }  
        // console.log(typeof(localStorage.getItem('JWTToken')))

    } catch(err) {
   
                 console.log(err);  
         }
    
    try {
        const jwtT = localStorage.getItem('JWTToken');
        console.log(jwtT);
        const logData = await  fetch('http://localhost:9090/api',{
            method: "GET",
           headers:{
                "Authorization": jwtT
        //    "" : "http://localhost:3000"
        }
        
		
		})
       const responseLogdata = await logData.json();
      
        console.log(logData);
       
        } catch(err) {
   
                 console.log(err);  
         }

}
         
        
        
    

    const logData = ()=>{
        console.log(jwtToken);
    }
           
   
        return (
            <LoginContext.Provider value={{login: login,loginStatus: loginStatus }}>
                { props.children }
            </LoginContext.Provider>
        )
}