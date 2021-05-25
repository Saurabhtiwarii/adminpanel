import React, { useContext, useState, useEffect } from 'react'
import './Resource.css'
import { LoginContext } from '../LoginContext';
import { SubjectsProvider } from '../SubjectsContext';
import ResourceMenu from './ResourceMenu';
import { ResourceContext } from '../ResourceContext';


function Resource() {
    const [ streamsList, setStreamsList ] = useState([]);
   const { loginStatus } = useContext(LoginContext);
   const { getResource } = useContext(ResourceContext);
  
    useEffect(()=>{
         getResource().then(function(streams){
        setStreamsList(streams);
    });

    }, [getResource])
     
    return (
        loginStatus ? (
             <SubjectsProvider>
            <div className="resource-wrapper">
                <div className="resource">
            <div className="stream-header">
                <div className="stream-header__content">
                     <h1>Streams Live</h1>
                     <h2>Total Streams: {streamsList.length} <span></span></h2>
                </div>
            </div>
            {/* <hr/> */}
           
                 <ResourceMenu streamsList = {streamsList}  />
          
           
                </div>
            </div>
              </SubjectsProvider>
            
        ) 
        :
        (
             <h1>Oops SOmething Went Wrong !!!</h1>
        )
        
    )
}

export default Resource;
