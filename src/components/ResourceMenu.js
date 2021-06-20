import React , { useState ,useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import ListLoader from './ListLoader'
function ResourceMenu({streamsList}) {
    
    
    return (
        <div>
            <ul className="streamsList">
                {streamsList.length !== 0 ? streamsList.map((stream, key)=>(
              <Link key = {key} to={`/panel/resource/${stream}/subjects`}><li >{stream}</li></Link>
            )) : <ListLoader/>}
            </ul>
            
            
        </div>
    )
}

export default ResourceMenu
