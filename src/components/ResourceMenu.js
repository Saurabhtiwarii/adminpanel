import React , { useState ,useContext, useEffect } from 'react'
import { ResourceContext } from '../ResourceContext';
import { Link } from 'react-router-dom';
function ResourceMenu() {
    const [ streamsList, setStreamsList ] = useState([]);
    const { getResource } = useContext(ResourceContext);
  
    useEffect(()=>{
         getResource().then(function(streams){
        console.log(streams);
        setStreamsList(streams);
    });

    }, [])
   

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
