import React,{useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom'
import { SubjectsContext } from '../SubjectsContext';
import NoSubjectAdded from './NoSubjectAdded';
import {AddSubject} from '../Service/AddSubject';

import addIcon from '../addIcon.svg'
import './Subjects.css'

function Subjects() {
    const [ subjectList, setSubjectList] = useState([]);
    const [ subjectName, setSubjectName] = useState('');
    const [ streamName, setStreamName] = useState('ALL');
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

const subjectView = subjectList.map((subject)=>(
              <a href="https://www.google.co.in/" key={subject.id}>
                  <li className="subject">
                    <div className="subject__name"> {subject.name}</div> 
                    <div className="subject__imageWrapper">
                        <img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3R1ZHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="subject name" />
                    </div>
                    </li>
                  
            </a>
            ));

const addTheSubject = (e)=>{
    
    e.preventDefault();
    const subjectAdded = document.querySelector('.subjectAdded-popup__msg');
    // console.log(imageBase64);
    AddSubject(subjectName,streamName, imageBase64).then(function(status){
        if(status === true){
             subjectAdded.classList.add('active');
             setAddSubjectStatus(!addSubjectStatus);
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
                            <select value={streamName} onChange={(e)=>setStreamName(e.target.value)} name="streamName" id="streamName">
                                <option value="All">All</option>
                                <option value="CSE">CSE</option>
                                <option value="CIVIL">CIVIL</option>
                                <option value="EC">EC</option>
                                <option value="EEE">EEE</option>
                                <option value="ME">ME</option>
                            </select>
                        </div>

                        <div className="addSubjectForm__image">
                            <label className="addSubjectForm__image-label" htmlFor="subjectImage">
                               <span>click here to upload image</span> 
                                </label>
                            <input type="file" onChange={(e)=>{ 
                                getBase64(e).then(function(base64){
                                    setImageBase64(base64)
                                })
                            }}  name="subjectImage" id="subjectImage"/>
                           
                        </div>
                         <img src={imageBase64} alt="asa" width="400" height="400" />
                        <div className="addSubjectForm__addButton-wrapper">
                            <button className="addSubjectForm__addButton" onClick={addTheSubject}> <img src={addIcon} alt="+" /> Add</button>
                        </div>
                        
                    </form>
                </div>
                 <ul className="subjectList">
              {  subjectList.length !== 0 ? subjectView 
                   : <NoSubjectAdded /> 
                }
            
            </ul>
            </div>
           
        </div>
    )
}

export default Subjects
