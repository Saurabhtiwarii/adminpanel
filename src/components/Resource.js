import React, { useContext } from 'react'
import './Resource.css'
 import { LoginContext } from '../LoginContext';
 import { SubjectsProvider } from '../SubjectsContext';

import ResourceMenu from './ResourceMenu';

function Resource() {
   const { loginStatus } = useContext(LoginContext);
     
    return (
        loginStatus ? (
            <div className="resource-wrapper">
                <div className="resource">
            <div className="stream-title"><h1>Streams Live</h1></div>
            {/* <hr/> */}
            <SubjectsProvider>
                 <ResourceMenu />
            </SubjectsProvider>
           
                </div>
            </div>
            
        ) 
        :
        (
             <h1>Oops SOmething Went Wrong !!!</h1>
        )
        
    )
}

export default Resource;
