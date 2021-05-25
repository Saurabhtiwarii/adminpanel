import React , { useState ,useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
function ResourceMenu({streamsList}) {
    
    
    return (
        <div>
            <ul className="streamsList">
                {streamsList ? streamsList.map((stream, key)=>(
              <Link key = {key} to={`/panel/resource/${stream}/subjects`}><li >{stream}</li></Link>
            )) : ''}
            </ul>
            
            
        </div>
    )
}

export default ResourceMenu
