import React,{useState, useEffect, useContext} from 'react';
import { useParams, Switch, Route, Link } from 'react-router-dom'
import { SubjectsContext } from '../SubjectsContext';
import ListEmptyMessage from './ListEmptyMessage';
import {AddSubject} from '../Service/AddSubject';

import addIcon from '../addIcon.svg'
import dummyImage from '../dummy-image.svg'
import './Subjects.css'


function Subjects() {
    const [ subjectList, setSubjectList] = useState([]);
    const [ subjectName, setSubjectName] = useState('');
    const [ addSubjectStatus, setAddSubjectStatus] = useState(false);
    const [imageBase64, setImageBase64] = useState("");
  
    const { getSubject } = useContext(SubjectsContext);
            const params = useParams();
             const stream= params.stream;
             

    useEffect( ()=>{
             getSubject(stream).then(function(subjects){
             setSubjectList(subjects)
             });

},[addSubjectStatus,stream,getSubject]);    

const subjectView = subjectList.map((subject)=>{
           
            return(
             
                  <li key={subject.id} className="subject" >
                      <div className="subject__content">
                        <div className="subject__name"> {subject.name}</div> 
                    <div className="subject__videosCount">
                     <p>Videos Live : <span>{subject.videos.length}</span> </p>  
                    </div>
                      </div>
                     <Link className="subject__link" to={`/panel/resource/${stream}/subjects/${subject.id}`} >More Details</Link>
                 
                    </li>
                  
           
                )
             }
        );

const addTheSubject = (e)=>{
    
    e.preventDefault();
    const subjectAdded = document.querySelector('.subjectAdded-popup__msg');
    // console.log(imageBase64);
    AddSubject(subjectName,stream, imageBase64).then(function(status){
        if(status === true){
             subjectAdded.classList.add('active');
             setAddSubjectStatus(!addSubjectStatus);
             setImageBase64("");
        }

        
           
})

setTimeout(()=>{
    subjectAdded.classList.remove('active');
}, 1500)

// if(addSubjectStatus === true){
    
//     setAddSubjectStatus(false);

// }



}

const getBase64 = async (e)=>{
    const file = e.target.files[0];
    // console.log(file);
  const base64 = await convertBase64(file);
//   console.log(base64);
  return base64;

    
}

const convertBase64 = (file)=>{
    return new Promise((resolve, reject)=>{
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload= ()=>{
            resolve(fileReader.result)
        };

        fileReader.onerror = (error)=>{
            reject(error);
        }
    })
}
    
    return (
       

        <div className="subject-wrapper">
            <div className={`subjectAdded-popup  `}>
                <div className={`subjectAdded-popup__msg`}>
                    Subject Added     
                </div> 
            </div>
            <header className="subjects-header">
                <nav>
                  <h1 className="subjects-header__title" >Stream : {stream}</h1>
                <h2 className="subjects-header__subjectCount">Subjects: {subjectList.length}</h2>
                </nav>
            </header>
            <div className="subject-wrapper__content">

                <div className="addSubjectForm">
                    <h3 className="addSubjectForm__title" >Add Subject</h3>
                    <form>
                        <div className="addSubjectForm__subjectName">
                             <label htmlFor="subjectName">Name</label>
                            <input value={subjectName} onChange={(e)=>setSubjectName(e.target.value)} type="text" name="subjectName" id="subjectName" />
                        </div>

                        <div className="addSubjectForm__streamName">
                           <label htmlFor="streamName">Choose a stream</label>
                            <select defaultValue={stream}  name="streamName" id="streamName">
                                <option value={stream}>{stream}</option>
                            </select>
                        </div>

                        <div className="addSubjectForm__image">
                            <div className="addSubjectForm__image-input">
                                <label className="addSubjectForm__image-label" htmlFor="subjectImage">
                               <span>Click here to upload image</span> 
                                </label>
                            <input type="file" onChange={(e)=>{ 
                                getBase64(e).then(function(base64){
                                    setImageBase64(base64)
                                })
                            }}  name="subjectImage" id="subjectImage"/>
                            </div>
                            
                            <div className="addSubjectForm__image-imageContainer">
                                <img src={imageBase64 ? imageBase64 : dummyImage } alt="asa"  />
                            </div>
                             
                        </div>
                        
                        <div className="addSubjectForm__addButton-wrapper">
                            <button className="addSubjectForm__addButton" onClick={addTheSubject}> <img src={addIcon} alt="+" /> Add</button>
                        </div>
                        
                    </form>
                </div>

                <div className="subjectList">
                    <h1 className="subjectList__title">Subjects Live</h1>
                          <ul className="subjectList__content">
                              {  subjectList.length !== 0 ? subjectView 
                              : <ListEmptyMessage message="No subject is added yet ..."/> 
                               }
                         </ul>
                </div>
               
            </div>

         
           
        </div>
                        
     

            

       
    )
}

export default Subjects
