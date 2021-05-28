import React, {  useContext } from 'react';
import { useParams , Switch, Route} from 'react-router-dom';
import Resource from './Resource';
import Blog from './Blog';
import Feedback from './Feedback';
import {ResourceProvider} from '../ResourceContext';
import {VideoProvider} from '../VideoContext';
import PageNotFound from './PageNotFound';
import {SubjectsProvider} from '../SubjectsContext';
import Subjects from './Subjects';
import SubjectDetails from './SubjectDetails'

import { LoginContext } from '../LoginContext';

function Options() {
    const params = useParams();
    const {loginStatus} = useContext(LoginContext);
    console.log(params)


    if(loginStatus){
        return(
            <Switch>

                <Route path="/panel/resource" exact>
                    <ResourceProvider>
                        <Resource /> 
                    </ResourceProvider>
                </Route>
                <Route path="/panel/resource/:stream/subjects" exact>
                    <SubjectsProvider>
                        <Subjects />
                        </SubjectsProvider> 
                </Route>
                <Route path={`/panel/resource/:stream/subjects/:subjectId`} >
                    <VideoProvider>
                         <SubjectDetails/>
                    </VideoProvider>
                </Route>

                <Route path="/panel/blog">
                    <ResourceProvider>
                        <Blog />
                    </ResourceProvider>
                </Route>

                <Route path="/panel/feedback">
                    <ResourceProvider>
                         <Feedback />
                    </ResourceProvider>
                </Route>

            </Switch>
        )
            
            // if(params.option === "blog" ){
            //     return(
            //         <Blog />
            //     )
            // }

            // if(params.option === "resource"){
            //     return(
            //             <ResourceProvider>
            //                   <Resource /> 
            //             </ResourceProvider>
                        
                
            //     )
            // }

            // if(params.option === "feedback"){
            //     return(
            //         <Feedback />
            //     )
            // }
    }
             return(
                       <PageNotFound />
                    )
        
    
}

export default Options
