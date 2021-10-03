import React, { useState, createContext } from 'react';

export const LoginContext = createContext();

export const LoginProvider = (props)=>{
 
    const [loginStatus, setLoginStatus] = useState(false);
    const login = async (userEmail, password)=>{
      const data ={
        email: userEmail,
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
    
    

}
         
        
        
    

   
           
   
        return (
            <LoginContext.Provider value={{login: login,loginStatus: loginStatus }}>
                { props.children }
            </LoginContext.Provider>
        )
}